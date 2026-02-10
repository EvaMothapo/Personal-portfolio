let menuButton = document.querySelector(".menu-toggle");
let nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
