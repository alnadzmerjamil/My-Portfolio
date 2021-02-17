//@index.html
let hamburgerIcon = document.querySelector('#hamburger-icon');
let divMenu = document.querySelector('#div-for-menu-container');
divMenu.style.display = 'none';

hamburgerIcon.addEventListener('click', () => {
  if (divMenu.style.display === 'none') {
    divMenu.style.display = 'flex';
  } else {
    divMenu.style.display = 'none';
  }
});
