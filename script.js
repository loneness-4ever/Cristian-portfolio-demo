const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    mobileNav.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const revealTargets = document.querySelectorAll(".section, .project-card, .skill-card, .focus-card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
