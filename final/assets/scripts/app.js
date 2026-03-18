

// Dark mode

window.addEventListener("DOMContentLoaded", function(){

  var toggleBtn = document.querySelector(".theme-toggle");

  // restore theme
  var savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
  document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

  });

});
// Menu
var menuBtn = document.querySelector(".menu-toggle");
var nav = document.querySelector(".nav");
var overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function(){

  nav.classList.toggle("active");
  overlay.classList.toggle("show");

});

overlay.addEventListener("click", function(){

  nav.classList.remove("active");
  overlay.classList.remove("show");

});

document.querySelectorAll(".nav a").forEach(function(link){
  link.addEventListener("click", function(){
    nav.classList.remove("active");
    overlay.classList.remove("show");
  });
});