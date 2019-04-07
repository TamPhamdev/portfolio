const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");
const navHeight = 102;
const nav = document.querySelector("#nav");
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(function(item) {
  item.addEventListener("click",remove);
});



function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

function remove() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuBranding.classList.remove("show");
  menuNav.classList.remove("show");
  navItems.forEach(item => item.classList.remove("show"));
  showMenu = true;
}
document.addEventListener(
  "DOMContentLoaded",
  function() {
    window.addEventListener("scroll", function() {
      if (this.pageYOffset > 50) {
        nav.classList.add("navbar_black");
      }
      if (this.pageYOffset < 50) {
        nav.classList.remove("navbar_black");
      }
    });
  },
  false
);
