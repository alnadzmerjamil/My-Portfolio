let imageHover = document.querySelectorAll('.skill-img');
let imageName = document.querySelector('#skill-name');
let fadeInUp = 'animate__fadeInUp';
let fadeInDown = 'animate__fadeInDown';
let jackIn = 'animate__jackInTheBox';
let animate;

imageHover.forEach((img) => {
  img.addEventListener('mouseover', () => {
    // imageName.textContent = img.id;
    // imageName.classList.add(flip);

    if (img.id === 'Javascript') {
      animate = fadeInDown;
    } else if (img.id === 'React') {
      animate = fadeInUp;
    } else if (img.id === 'HTML') {
      animate = fadeInDown;
    } else if (img.id === 'CSS') {
      animate = fadeInUp;
    } else if (
      img.id === 'mongoDB' ||
      img.id === 'Express' ||
      img.id === 'Node.js'
    ) {
      animate = jackIn;
    }

    imageName.textContent = img.id;
    imageName.classList.add(animate);
  });
  img.addEventListener('mouseout', () => {
    imageName.textContent = '';
    imageName.classList.remove(animate);
  });
});

let uplift = document.querySelector('.uplift');
let upliftLogo = document.querySelector('#uplift-logo');
let fullStack = document.querySelector('.fullstack');
let fullStackSy = document.querySelector('.sy-uplift');
let flag = false;
function upliftFunction() {
  if (!flag) {
    fullStack.classList.add(fadeInDown);
    fullStackSy.classList.add(fadeInUp);
    flag = true;
  } else {
    fullStack.classList.remove(fadeInDown);
    fullStackSy.classList.remove(fadeInUp);
    flag = false;
  }
}
uplift.addEventListener('mouseover', upliftFunction);
uplift.addEventListener('mouseout', upliftFunction);
upliftLogo.addEventListener('mouseover', upliftFunction);
upliftLogo.addEventListener('mouseout', upliftFunction);

let msu = document.querySelector('.msu');
let msuCourse = document.querySelector('.it');
let msuLogo = document.querySelector('#msu-logo');
let msuSy = document.querySelector('.sy-msu');
function msuFunction() {
  if (!flag) {
    msuCourse.classList.add(fadeInDown);
    msuSy.classList.add(fadeInUp);
    flag = true;
  } else {
    msuCourse.classList.remove(fadeInDown);
    msuSy.classList.remove(fadeInUp);
    flag = false;
  }
}
msu.addEventListener('mouseover', msuFunction);
msu.addEventListener('mouseout', msuFunction);
msuLogo.addEventListener('mouseover', msuFunction);
msuLogo.addEventListener('mouseout', msuFunction);

//
//@index.html
let hamburgerIcon = document.querySelector('#hamburger-icon');
let divMenu = document.querySelector('#div-for-menu-container');
divMenu.style.visibility = 'hidden';

let flag1;
hamburgerIcon.addEventListener('click', () => {
  if (divMenu.style.visibility === 'hidden') {
    hamburgerIcon.classList.add('fa-times');
    hamburgerIcon.classList.remove('fa-bars');
    divMenu.style.visibility = 'visible';
    divMenu.classList.add('animate__fadeInLeftBig');
    flag1 = true;
  } else if (flag1) {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    divMenu.classList.remove('animate__fadeInLeftBig');
    divMenu.classList.remove('animate__faster');
    divMenu.classList.add('animate__slow');
    divMenu.classList.add('animate__fadeOutLeftBig');
    flag1 = false;
  } else if (!flag1) {
    hamburgerIcon.classList.add('fa-times');
    hamburgerIcon.classList.remove('fa-bars');
    divMenu.classList.remove('animate__fadeOutLeftBig');
    divMenu.classList.remove('animate__slow');
    divMenu.classList.add('animate__faster');
    divMenu.classList.add('animate__fadeInLeftBig');
    flag1 = true;
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
