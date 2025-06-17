const toggleButton = document.getElementById("toggle-nav");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const header = document.getElementById("header");

const links = document.querySelectorAll('[data-class="nav-link"]');
const sections = document.querySelectorAll(".section");

toggleButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  if (menuIcon.src.includes("menu-rows.png")) {
    menuIcon.src = "assets/letter-x.png";
  } else {
    menuIcon.src = "assets/menu-rows.png";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.classList.add("shadow-xl/20");
  } else {
    header.classList.remove("shadow-xl/20");
  }

  sections.forEach((section) => {
    const beginPoint = section.offsetTop - 300;
    const endPoint = beginPoint + section.clientHeight + 100;

    if (window.scrollY >= beginPoint && window.scrollY <= endPoint) {
      links.forEach((link) => {
        var index = link.href;

        if (index.substring(index.indexOf("#") + 1) == section.id) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    }
  });
});
