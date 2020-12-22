"use strict";

// Document Loading
window.addEventListener("DOMContentLoaded", () => {
	// Burger Menu
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

	// Fixed Header
	document.addEventListener("scroll", fixed);
	document.addEventListener("load", fixed);
	document.addEventListener("resize", fixed);

	function fixed() {
		const header = document.querySelector(".header"),
		  promo = document.querySelector(".promo");

		let scrollPosition = window.pageYOffset,
		    promoHeight;

		promoHeight = promo.offsetHeight;
		scrollPosition = window.pageYOffset;

		if (scrollPosition + 106 > promoHeight) {
			header.classList.add("header--fixed");
		} else {
			header.classList.remove("header--fixed");
		}
	}

	// Smooth Scroll
	document.querySelectorAll("[data-scroll]").forEach(item => {
		item.addEventListener("click", (e) => {
			e.preventDefault();

			const itemId = item.getAttribute("data-scroll");
			const itemOffset = document.querySelector(itemId).offsetTop;

			window.scrollTo({
				top: itemOffset - 105,
				behavior: "smooth"
			});
		});
	});
});
