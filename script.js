document.addEventListener('DOMContentLoaded', () => {
  // --- NAV HAMBURGUESA ---
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primary-nav');
  
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      primaryNav.style.display = isOpen ? 'none' : 'flex';
      primaryNav.setAttribute('aria-hidden', String(isOpen));
      navToggle.textContent = isOpen ? '☰' : '✕';
    });
  }
  
  // --- THEME TOGGLE ---
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  
  function setTheme(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.textContent = 'Modo claro';
    } else {
      root.removeAttribute('data-theme');
      if (themeToggle) themeToggle.textContent = 'Modo oscuro';
    }
  }
  
  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme) setTheme(savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('site-theme', newTheme);
    });
  }
  
  // --- NEWSLETTER ---
  const form = document.getElementById('subscribeForm');
  const msg = document.getElementById('subscribeMsg');
  const emailInput = document.getElementById('email');
  
  if (form && msg && emailInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email.includes('@')) {
        msg.textContent = 'Correo inválido';
        msg.style.color = 'var(--accent)';
        return;
      }
      msg.textContent = '¡Gracias por suscribirte!';
      msg.style.color = 'var(--accent-2)';
      form.reset();
    });
  }
  
  // --- CONTACTO ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const confirm = document.createElement("p");
      confirm.textContent = "¡Tu mensaje fue enviado con éxito!";
      confirm.style.color = "var(--accent)";
      contactForm.appendChild(confirm);
      setTimeout(() => confirm.remove(), 4000);
      contactForm.reset();
    });
  }
  
  // --- AÑO DINÁMICO ---
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});