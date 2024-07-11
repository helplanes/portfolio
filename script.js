document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
  
    hamburger.addEventListener("click", function() {
      document.body.classList.toggle("menu-open");
    });
  });
  