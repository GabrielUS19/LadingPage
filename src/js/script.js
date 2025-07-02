const toggleButton = document.getElementById("toggle-nav");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const header = document.getElementById("header");

const links = document.querySelectorAll('[data-class="nav-link"]');
const sections = document.querySelectorAll(".section");

const h1Sections = document.querySelectorAll(".h1-section");

// Menu de navegação mobile

toggleButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  if (menuIcon.src.includes("menu-rows.png")) {
    menuIcon.src = "assets/letter-x.png";
  } else {
    menuIcon.src = "assets/menu-rows.png";
  }
});

// Sombra no header ao deslizar

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
});

// Detecção da página atual

const observerSection = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          if (
            entry.target.id == link.href.substring(link.href.indexOf("#") + 1)
          ) {
            link.classList.add("active-link");
          }
        });
      } else {
        links.forEach((link) => {
          if (
            entry.target.id == link.href.substring(link.href.indexOf("#") + 1)
          ) {
            link.classList.remove("active-link");
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  observerSection.observe(section);
});

// Animação de digitação

function writeH1About(element, text, count) {
  if (count < text.length) {
    setTimeout(() => {
      element.textContent += text.charAt(count);
      count++;
      writeH1About(element, text, count);
    }, 60);
  }
}

const observerH1Section = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let element = entry.target;
        let text = element.getAttribute("data-text");
        if (!element.textContent) {
          writeH1About(element, text, 0);
        }
      }
    });
  },
  {
    threshold: 1,
  }
);

h1Sections.forEach((h1Section) => {
  observerH1Section.observe(h1Section);
});
