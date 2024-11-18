document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");
  console.log(nav.scrollHeight)
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 2) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
      nav.style.height = nav.scrollHeight + "px";
    } else {  
      nav.style.height = null;
    }
  })
  //if any a tag is clicked, close the nav
  document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      nav.style.height = null;
    });
  });
});
