//@index.html
let hamburgerIcon = document.querySelector('#hamburger-icon');
let divMenu = document.querySelector('#div-for-menu-container');
divMenu.style.visibility = 'hidden';
let flag;
hamburgerIcon.addEventListener('click', () => {
  if (divMenu.style.visibility === 'hidden') {
    hamburgerIcon.classList.add('fa-times');
    hamburgerIcon.classList.remove('fa-bars');
    divMenu.style.visibility = 'visible';
    divMenu.classList.add('animate__fadeInLeftBig');
    flag = true;
  } else if (flag) {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    divMenu.classList.remove('animate__fadeInLeftBig');
    divMenu.classList.remove('animate__faster');
    divMenu.classList.add('animate__slow');
    divMenu.classList.add('animate__fadeOutLeftBig');
    flag = false;
  } else if (!flag) {
    hamburgerIcon.classList.add('fa-times');
    hamburgerIcon.classList.remove('fa-bars');
    divMenu.classList.remove('animate__fadeOutLeftBig');
    divMenu.classList.remove('animate__slow');
    divMenu.classList.add('animate__faster');
    divMenu.classList.add('animate__fadeInLeftBig');
    flag = true;
  }
});

let spanX = document.querySelectorAll('.span-x');
spanX.forEach((span) => {
  span.addEventListener('click', () => {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    divMenu.classList.remove('animate__fadeInLeftBig');
    divMenu.classList.remove('animate__faster');
    divMenu.classList.add('animate__slow');
    divMenu.classList.add('animate__fadeOutLeftBig');
    flag = false;
  });
});
