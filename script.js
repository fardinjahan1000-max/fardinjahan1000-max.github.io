// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.navbar nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});


// Active navbar link while scrolling
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navbarLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


// Navbar shadow effect after scrolling
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
  }
});


// Simple fade-in animation when sections appear
const fadeElements = document.querySelectorAll(
  '.section, .hero-left, .hero-right, .card, .project-card, .publication, .item'
);

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(element => {
  element.classList.add('fade-in');
  fadeObserver.observe(element);
});


// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.add('show-back-to-top');
  } else {
    backToTopButton.classList.remove('show-back-to-top');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Footer year auto update
const footerText = document.querySelector('footer p');

if (footerText) {
  const currentYear = new Date().getFullYear();
  footerText.innerHTML = `© ${currentYear} Md. Tamim Ahmed · All rights reserved`;
}
