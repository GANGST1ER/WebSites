"use strict";

// console.log("Hello Gulp");

// Для WebP
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const menu = document.querySelector(".menu"),
  menuClose = document.querySelector(".menu__close"),
  overlayClose = document.querySelector(".menu__overlay"),
  gamburger = document.querySelector(".hamburger");

gamburger.addEventListener("click", () => {
  menu.classList.add("menu--active");
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});
overlayClose.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});

const values = document.querySelectorAll(".sidebar__percent"),
  lines = document.querySelectorAll(".line--color");

values.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
