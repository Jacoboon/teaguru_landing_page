const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.site-header');

const toggleNav = () => {
  if (!navToggle || !navList) return;
  const isOpen = navList.classList.toggle('nav-list--open');
  navToggle.classList.toggle('nav-toggle--open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

if (navList) {
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900 && navList.classList.contains('nav-list--open')) {
        toggleNav();
      }
    });
  });
}

// Smooth scroll fallback for browsers that ignore CSS scroll-behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    const targetEl = targetId && document.querySelector(targetId);
    if (!targetEl) return;
    event.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
