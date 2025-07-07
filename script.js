// Only toggle the dropdown menu
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownLinks = document.querySelectorAll('.dropdown-link');

if (menuBtn && dropdownMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
  });
}

// SPA Section navigation logic
const sections = document.querySelectorAll('section');
function showSection(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.remove('hidden-section');
      sec.classList.add('visible-section');
    } else {
      sec.classList.remove('visible-section');
      sec.classList.add('hidden-section');
    }
  });
}

dropdownLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');
    showSection(targetId);
    dropdownMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    dropdownLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Show only About on load
window.addEventListener('DOMContentLoaded', () => {
  showSection('about');
});

// Fix: Close dropdown menu when clicking outside (for better mobile UX)
document.addEventListener('click', (event) => {
  // If menu is open and click is outside menuBtn and dropdownMenu, close it
  if (
    dropdownMenu.classList.contains('open') &&
    !menuBtn.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove('open');
    menuBtn.classList.remove('open');
  }
});