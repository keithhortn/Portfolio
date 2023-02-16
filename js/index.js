"use strict";

// Get elements from DOM
const ldSwitch = document.querySelector(".ld-switch-container");

// Light/Dark Switch

// Side Navigation Code
const hamburger = document.querySelector(".hamburger-btn");
const sideNav = document.querySelector(".ham-nav-container");
const exitBtn = document.querySelector(".exit-btn");
const body = document.querySelector("body");
const hamLinks = document.querySelectorAll(".ham-link");

// Show hamburger button on tablet view

// // Open side navigation
// hamburger.addEventListener("click", openSideNav);
// function openSideNav(e) {
//   if (sideNav.classList.contains("hidden")) {
//     sideNav.classList.remove("hidden");
//     body.classList.add("stop-scrolling");
//   }
// }

// // Close side navigation
// exitBtn.addEventListener("click", closeSideNav);
// function closeSideNav(e) {
//   sideNav.classList.add("hidden");
//   body.classList.remove("stop-scrolling");
// }

// // If link is clicked, go to page section and close side navigation
// for (let i = 0; i < hamLinks.length; i++) {
//   hamLinks[i].addEventListener("click", function () {
//     sideNav.classList.add("hidden");
//     body.classList.remove("stop-scrolling");
//   });
// }
