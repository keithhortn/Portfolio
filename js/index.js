// Get Elements from DOM
const hamburger = document.querySelector(".hamburger-container");
const sideNav = document.querySelector(".ham-nav-container");
const exitBtn = document.querySelector(".exit-btn");
const body = document.querySelector("body");
const hamLinks = document.querySelectorAll(".ham-link");
const projects = document.querySelectorAll(".project");
const modalOverlay = document.querySelector(".work-modal-overlay");
const innerModal = document.querySelector(".inner-modal");
const modalExit = document.querySelector(".wm-exit");
const nav = document.querySelector("header");

// Open side navigation
hamburger.addEventListener("click", openSideNav);
function openSideNav(e) {
  if (sideNav.classList.contains("hidden")) {
    sideNav.classList.remove("hidden");
    body.classList.add("stop-scrolling");
  }
}

// Close side navigation
exitBtn.addEventListener("click", closeSideNav);
function closeSideNav() {
  sideNav.classList.add("hidden");
  body.classList.remove("stop-scrolling");
}

// If link is clicked, go to page section and close side navigation
for (let i = 0; i < hamLinks.length; i++) {
  hamLinks[i].addEventListener("click", function () {
    sideNav.classList.add("hidden");
    body.classList.remove("stop-scrolling");
  });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    nav.style.top = "-6em";
  } else {
    nav.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
