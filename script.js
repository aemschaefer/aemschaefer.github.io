// script.js

// Scroll-Animation per Intersection Observer
const faders = document.querySelectorAll(".fade-in");

const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((fader) => {
  observer.observe(fader);
});

// Formular-Validierung
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Grundvalidierung
  if (name.length === 0 || message.length === 0 || !email.includes("@")) {
    event.preventDefault();
    alert(
      'Bitte füllen Sie alle Felder korrekt aus (E-Mail muss ein "@" enthalten).',
    );
  } else {
    alert("Danke für Ihre Nachricht!");
  }
});
