let currentLang = "pt";

function toggleLang() {
  currentLang = currentLang === "pt" ? "en" : "pt";

  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

function toggleTheme() {
  document.body.classList.add("transitioning");

  setTimeout(() => {
    document.body.classList.toggle("light");
  }, 50);

  setTimeout(() => {
    document.body.classList.remove("transitioning");
  }, 600);
}

document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

