// Afficher la date de dernière mise à jour
document.addEventListener("DOMContentLoaded", () => {
  const lastUpdate = document.getElementById("lastUpdate");
  if (lastUpdate) {
    const today = new Date().toLocaleDateString("fr-FR");
    lastUpdate.textContent = today;
  }
});

// Scroll fluide vers une section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    scrollToSection(target);
  });
});

// Mode clair / sombre avec sauvegarde locale
const toggleBtn = document.getElementById("toggleTheme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

// Appliquer le thème sauvegardé ou celui du système
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Formulaire de contact (démo)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour ton message ! (Formulaire de démonstration)");
    form.reset();
  });
}
