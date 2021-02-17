// @project.html
let projectDescription = document.querySelector('#description-container');
projectDescription.style.display = 'none';
let arrow = document.querySelector('#arrow');

let btnX = document.querySelector('#btnX');
btnX.addEventListener('click', () => {
  projectDescription.style.display = 'none';
});
let arr = document.querySelectorAll('.img');
arr.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    projectDescription.style.display = 'block';
  });
});
