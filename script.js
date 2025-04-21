document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header ul li a");
  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".menu-slider");
  const body = document.body;

  function setActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - document.documentElement.scrollTop - headerHeight;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.parentElement.classList.add("active");
      }
    });
  }

  // Toggle menu open/close
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");
    body.classList.toggle("no-scroll"); // Lock/unlock scroll
  });

  // Close menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      body.classList.remove("no-scroll"); // Unlock scroll
    });
  });

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // Initial call to set the active link on page load
});
