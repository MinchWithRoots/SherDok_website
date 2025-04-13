var wrapperMenu = document.querySelector("#menu");
var mobileMenu = document.querySelector(".mobile-menu");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  mobileMenu.classList.toggle("active");
});
