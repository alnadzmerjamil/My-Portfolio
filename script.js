// @nav bar
let arrowLeft = document.getElementById('arrow-left');
let navOnPhone = document.getElementById('nav-phone');
arrowLeft.addEventListener('click', function () {
  navOnPhone.style.display = 'none';
});

navOnPhone.addEventListener('mouseout', function () {
  navOnPhone.style.display = 'none';
});

let burger = document.getElementById('fa-bars');
burger.addEventListener('click', function () {
  navOnPhone.style.display = 'block';
});

let anchors = document.querySelectorAll('.a-phone');
anchors.forEach((a) => {
  a.addEventListener('click', function () {
    navOnPhone.style.display = 'none';
  });
});
// @project
let sample = document.getElementById('sample');
// sample.style.display = 'none';
console.log(sample);
let projects = document.querySelectorAll('.div-project-name');
projects.forEach((project) => {
  project.addEventListener('mouseover', function () {
    let description = document.getElementById(project.id + '-' + 'name');
    project.style.backgroundColor = 'rgba(255,255,255,0.5)';
    description.style.display = 'block';
  });
  project.addEventListener('mouseout', function () {
    let description = document.getElementById(project.id + '-' + 'name');
    project.style.backgroundColor = 'rgba(255,255,255,0)';
    description.style.display = 'none';
  });
});
