const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const contactForm = document.querySelector("#contact-form");
const contactClock = document.querySelector("#contact-clock");

themeToggle.addEventListener("click", () => {
  const isLight = root.dataset.theme !== "light";
  root.dataset.theme = isLight ? "light" : "dark";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Close navigation menu" : "Open navigation menu");
  siteNav.classList.toggle("is-open", isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && siteNav.classList.contains("is-open")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

const updateContactClock = () => {
  const time = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(new Date());

  contactClock.textContent = `${time} IST · New Delhi, India`;
};

updateContactClock();
window.setInterval(updateContactClock, 1000);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.elements.namedItem("name").value.trim();
  const email = contactForm.elements.namedItem("email").value.trim();
  const message = contactForm.elements.namedItem("message").value.trim();
  const subject = `Portfolio inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nProject / consultation scope:\n${message}`;
  const mailto = `mailto:sandeepuim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});
