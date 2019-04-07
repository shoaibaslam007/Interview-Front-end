const toggleBtn = document.querySelector('.navigation__toggle');
const mainNav = document.querySelector('.navigation--collapse');

toggleBtn.addEventListener('click', function() {
  if (mainNav.className === 'navigation--collapse') {
    mainNav.className += ' responsive';
  } else {
    mainNav.className = 'navigation--collapse';
  }
});
