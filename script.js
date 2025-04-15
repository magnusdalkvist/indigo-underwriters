document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));

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

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // Initial call to set the active link on page load
});
