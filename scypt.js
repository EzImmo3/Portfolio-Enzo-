// Afficher la date de dernière mise à jour
document.addEventListener("DOMContentLoaded", () => {
  const lastUpdate = document.getElementById("lastUpdate");
  const today = new Date().toLocaleDateString("fr-FR");
  lastUpdate.textContent = today;
});

// Mode clair/sombre
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});