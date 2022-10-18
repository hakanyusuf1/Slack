const hamButton = document.getElementById("hamburger-button");
const hamCloseButton = document.getElementById("mobile-navbar close");
const burgerMenu = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar");
const footerNavbar = document.querySelector(".footerNavbar");

const footerList = document.querySelector(".footer");

hamButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerMenuActive");
});

hamCloseButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerMenuActive");
});

footerNavbar.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("footerNav");
});
function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "#541554";
    document.getElementById("navbar").style.borderRadius = "50px";
    document.getElementById("navbar").style.top = "10px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#541554";

    document.getElementById("navbar").style.borderRadius = "0px";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.color = "white";
  }
}

window.onscroll = function () {
  scrollFunction();
};
