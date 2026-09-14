document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return prefersDark.matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

applyTheme(currentTheme());

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

const emailLink = document.getElementById('emailLink');
if (emailLink) {
  emailLink.addEventListener('click', async (e) => {
    if (navigator.clipboard) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(emailLink.textContent.trim());
        const original = emailLink.textContent;
        emailLink.textContent = 'Copied!';
        setTimeout(() => { emailLink.textContent = original; }, 1200);
      } catch {
        window.location.href = emailLink.href;
      }
    }
  });
}
