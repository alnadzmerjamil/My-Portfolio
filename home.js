// starts here
let hamburger = document.querySelector('#hamburger-icon');
let menuContainer = document.querySelector('#div-for-menu');
menuContainer.style.display = 'none';
hamburger.addEventListener('click', () => {
  if (menuContainer.style.display === 'none') {
    menuContainer.style.display = 'flex';
  } else {
    menuContainer.style.display = 'none';
  }
});
let arrow = document.querySelector('#work-text');
arrow.addEventListener('click', function () {
  alert('Description not available');
});
// let x = document.querySelector('#div-for-menu-container');
// x.addEventListener('mouseout', function () {
//   alert();
//   // menuContainer.style.display = 'none';
// });

// let home = document.querySelector('#home');
// home.addEventListener('click', () => {
//   alert();
// });
//
// let miniContainer = document.querySelector('.mini-container');
// miniContainer.style.width = '50%';
// let content = document.querySelector('.content');
// // content.style.width = '50%';
// let about = document.querySelector('#about');

// about.addEventListener('click', () => {
//   miniContainer.style.width = '25%';
//   miniContainer.style.transitionDelay = '0.1s';
//   miniContainer.style.transitionDuration = '0.1s';

//   // content.style.padding = '10px 0px 10px 30px';
//   sample();
// });

// function sample() {
//   content.style.width = '75%';
//   content.style.transitionDelay = '0.5s';
//   content.style.visibility = 'visible';
// content.style.transitionDuration = '0.1s';
// }
//
// let project = document.querySelector('#project');
// project.addEventListener('click', () => {
//   alert();
// });
// //
// let contact = document.querySelector('#contact');
// contact.addEventListener('click', () => {
//   alert();
// });

let upNavBar = document.querySelector('#up-nav');
let x = document.querySelector('#strong-name');
x.addEventListener('mouseover', function () {
  alert(upNavBar.style.top);
});
