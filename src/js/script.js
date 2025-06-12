const toggleButton = document.getElementById("toggle-nav");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

toggleButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  if (menuIcon.src.includes("menu-rows.png")) {
    menuIcon.src = "assets/letter-x.png";
  } else {
    menuIcon.src = "assets/menu-rows.png";
  }
});
