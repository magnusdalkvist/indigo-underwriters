"use strict";
(() => {
  const menuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");
  const firstHero = document.querySelector(".hero");

  // Safety check to ensure firstHero exists before adding scroll behavior
  if (!firstHero) return;

  // Helper to update nav height based on open state
  const updateNavHeight = () => {
    nav.style.height = nav.classList.contains("open") ? nav.scrollHeight + "px" : null;
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > firstHero.clientHeight - 200) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      updateNavHeight();
    });
  }

  // Use event delegation for nav anchor clicks instead of adding individual listeners
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (anchor && nav.contains(anchor)) {
      nav.classList.remove("open");
      updateNavHeight();
    }
  });
})();
