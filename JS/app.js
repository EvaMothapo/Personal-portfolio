document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Mobile menu toggle ----------------
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });

  // ---------------- Homepage animation ----------------
  const homepageText = document.querySelector(".homepage-text");
  const profilePic = document.querySelector(".profile-pic img");

  if (homepageText && profilePic) {
    // Fade in with a slight delay
    setTimeout(() => {
      homepageText.classList.add("visible");
      profilePic.classList.add("visible");
    }, 300);
  }

  // ---------------- Section fade-in on scroll ----------------
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
