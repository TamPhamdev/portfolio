const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

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
document.addEventListener('DOMContentLoaded', function () {
  let nav = document.querySelector('#nav');
  window.addEventListener('scroll', function () {
    if (this.pageYOffset > 50) {
      nav.classList.add('navbar_black');
    }
    if (this.pageYOffset < 50) {
      nav.classList.remove('navbar_black');
    }
  });
}, false)