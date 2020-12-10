"use strict";

window.addEventListener("DOMContentLoaded", () => {
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

    document.querySelector(".header__burger").addEventListener("click", () => {
        document
            .querySelector(".menu-burger")
            .classList.toggle("menu-burger--active");
        document.querySelector("body").classList.toggle("hidden");
    });

    document.querySelector(".menu-burger").addEventListener("click", () => {
        document
            .querySelector(".menu-burger")
            .classList.toggle("menu-burger--active");
        document.querySelector("body").classList.toggle("hidden");
    });
});

