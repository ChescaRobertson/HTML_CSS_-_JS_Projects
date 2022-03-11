const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

// Add active class to nav when the page is scrolled (to change colour of navbar is moved past a certain point)
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
