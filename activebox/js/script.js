"use strict";

window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header__menu"),
	      burger = document.querySelector(".burger");

	burger.addEventListener("click", () => {
		if (menu.style.display === "none") {
			menu.style.display = "block";
			document.body.style.overflow = "hidden";
		} else {
			menu.style.display = "none";
			document.body.style.overflow = "auto";
		}
	});
});