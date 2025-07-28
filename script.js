// Warten bis DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver für Fade-In-Elemente
  const observerOptions = {
    root: null,
    threshold: 0.1, // Trigger, wenn 10% sichtbar
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // nur einmal einblenden, dann nicht weiter beobachten
      }
    });
  }, observerOptions);
  // alle Elemente mit .fade-in beobachten
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Formular-Validierung beim Absenden
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Eingabefelder auslesen
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Validierung der Felder
    if (!name || !email || !message) {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }
    if (email.indexOf("@") === -1) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    // Falls alles OK:
    alert("Danke für Ihre Nachricht!");
    form.reset();
  });
});
