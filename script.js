// Only toggle the dropdown menu
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownLinks = document.querySelectorAll('.dropdown-link');

if (menuBtn && dropdownMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.classList.contains('open');
    menuBtn.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
    
    // Update ARIA attributes
    menuBtn.setAttribute('aria-expanded', !isOpen);
    dropdownMenu.setAttribute('aria-hidden', isOpen);
  });
}

// SPA Section navigation logic
const sections = document.querySelectorAll('section');
function showSection(id) {
  // Show loading overlay
  showLoading();
  
  setTimeout(() => {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.remove('hidden-section');
        sec.classList.add('visible-section');
        // Update URL without page reload
        history.pushState({}, '', `#${id}`);
      } else {
        sec.classList.remove('visible-section');
        sec.classList.add('hidden-section');
      }
    });
    // Hide loading overlay
    hideLoading();
  }, 300);
}

// Loading overlay functions
function showLoading() {
  let overlay = document.getElementById('loading-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('show');
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  } else {
    showSection('hero');
  }
});

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

// Show appropriate section on load
window.addEventListener('DOMContentLoaded', () => {
  // Add a small delay to ensure smooth loading
  setTimeout(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      showSection(hash);
    } else {
      showSection('hero');
    }
  }, 100);
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
    menuBtn.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
  }
});

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dropdownMenu.classList.contains('open')) {
    dropdownMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
    menuBtn.focus();
  }
});

// Back to top button functionality
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize the page - show hero section by default
document.addEventListener('DOMContentLoaded', () => {
  // Show hero section by default
  showSection('hero');
});