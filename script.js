/* ============================= */
/* 📌 NAVIGATION ENTRE SECTIONS */
/* ============================= */

const navLinks = document.querySelectorAll(".nav-link");
const scrollButtons = document.querySelectorAll("[data-target]");

scrollButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ============================= */
/* 📅 DATE DE DERNIÈRE MISE À JOUR */
/* ============================= */

const lastUpdateEl = document.getElementById("lastUpdate");
if (lastUpdateEl) {
  const now = new Date();
  const formatted = now.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  lastUpdateEl.textContent = formatted;
}

/* ============================= */
/* 🌗 MODE CLAIR / SOMBRE */
/* ============================= */

const toggleTheme = document.getElementById("toggleTheme");
const THEME_KEY = "portfolio_theme";

// Thème par défaut si rien n'est stocké
if (!localStorage.getItem(THEME_KEY)) {
  localStorage.setItem(THEME_KEY, "dark");
}

// Appliquer le thème sauvegardé
document.body.classList.add(localStorage.getItem(THEME_KEY));

// Mettre à jour l'icône du bouton
function updateThemeIcon() {
  const isLight = document.body.classList.contains("light");
  toggleTheme.textContent = isLight ? "🌙" : "☀️";
}
updateThemeIcon();

// Changer le thème au clic
toggleTheme.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");

  document.body.classList.remove("light", "dark");
  document.body.classList.add(isLight ? "dark" : "light");

  localStorage.setItem(THEME_KEY, isLight ? "dark" : "light");

  updateThemeIcon();
});

/* ============================= */
/* ✨ ANIMATIONS DOUCES AU SCROLL */
/* ============================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, .card, .project").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
