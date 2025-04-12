var wrapperMenu = document.querySelector("#menu");

var navMenu = document.querySelector("header nav ul");

 wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  navMenu.classList.toggle("show");
});
