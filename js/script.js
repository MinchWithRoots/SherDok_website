var wrapperMenu = document.querySelector("#menu");
wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
});

function toggleMenu() {
   document.querySelector("header nav ul").classList.toggle("show");
 }