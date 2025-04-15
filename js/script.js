var wrapperMenu = document.querySelector("#menu");
var mobileMenu = document.querySelector(".mobile-menu");
var overlay = document.querySelector(".overlay");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// закрытие при клике на затемнение
overlay.addEventListener("click", function () {
  wrapperMenu.classList.remove("open");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});