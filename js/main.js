// main.js — Dark/light mode toggle

const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

const themeBtn = document.getElementById('theme-btn');

function updateButtonText() {
  if (!themeBtn) return;
  const current = html.getAttribute('data-theme');
  themeBtn.textContent = current === 'dark' ? 'Light mode' : 'Dark mode';
}

updateButtonText();

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateButtonText();
  });
}