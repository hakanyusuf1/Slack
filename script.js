const hamButton = document.getElementById("hamburger-button");
const hamCloseButton = document.getElementById("mobile-navbar close");
const burgerMenu = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar");

hamButton.addEventListener("click", () => {
  burgerMenu.classList.add("burgerMenuActive");
  navbar.classList.add("hidden");
});

hamCloseButton.addEventListener("click", () => {
  burgerMenu.classList.remove("burgerMenuActive");
  navbar.classList.remove("hidden");
});
