const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const sections = document.querySelectorAll('section[id]');
function setActiveLink(){
  let current = 'home';
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if(window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();
