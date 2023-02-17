"use strict";

// Get elements from DOM
// Move head based on the position of mouse move
// const body = document.querySelector("body");
// const myHead = document.querySelector(".me-moji");

// myHead.style.backgroundColor = "lightblue";

// body.addEventListener("mousemove", moveHead);

// function moveHead(e) {
//   let top = e.offsetY;
//   let left = e.offsetX;
//   myHead.style.position = "relative";

//   myHead.style.top = `%${top}`;
//   myHead.style.left = `%${left}`;
// }

// Side Navigation Code
const hamburger = document.querySelector(".hamburger-container");
const sideNav = document.querySelector(".ham-nav-container");
const exitBtn = document.querySelector(".exit-btn");
const body = document.querySelector("body");
const hamLinks = document.querySelectorAll(".ham-link");

// Open side navigation
hamburger.addEventListener("click", openSideNav);
function openSideNav(e) {
  if (sideNav.classList.contains("hidden")) {
    sideNav.classList.remove("hidden");
    body.classList.add("stop-scrolling");
  }
}

// cCose side navigation
exitBtn.addEventListener("click", closeSideNav);
function closeSideNav(e) {
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
