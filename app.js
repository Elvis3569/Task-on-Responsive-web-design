"use strict";

const navLinks = document.querySelector(".nav-links");
const iconElement = document.querySelector(".icon");

function navBarDropMenu() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

iconElement.addEventListener("click", navBarDropMenu);
