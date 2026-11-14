function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var btn = document.getElementById("theme");
  if (btn) btn.textContent = theme === "dark" ? "Light" : "Dark";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
}

// При загрузке страницы: вспомнить выбор или взять тему системы
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (systemDark ? "dark" : "light"));
})();