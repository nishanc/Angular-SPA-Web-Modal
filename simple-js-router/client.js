
window.onload = function() {
  const routes = {
    "/": home,
    "/about": about,
    "/contact": contact,
  };
  
  const activeRoutes = Array.from(document.querySelectorAll("[route]"));
  const currentPath = window.location.pathname;
  const routeHandler = routes[currentPath] || notFound;
  routeHandler();

  function home() {
    document.getElementById("content").innerHTML = "<h1>Home Page</h1>";
  }
  
  function about() {
    document.getElementById("content").innerHTML = "<h1>About Page</h1>";
  }
  
  function contact() {
    document.getElementById("content").innerHTML = "<h1>Contact Page</h1>";
  }
  
  function notFound() {
    document.getElementById("content").innerHTML = "<h1>404 Page Not Found</h1>";
  }
  
  activeRoutes.forEach((route) => {
    route.addEventListener("click", function (event) {
      const path = event.target.getAttribute('route');
      const routeHandler = routes[path] || notFound;
      
      window.history.pushState({ path: path }, '', path);
      routeHandler();
    });
  });
}