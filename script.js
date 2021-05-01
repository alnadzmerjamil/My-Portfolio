// @nav bar
let arrowLeft = document.getElementById('arrow-left');
let navOnPhone = document.getElementById('nav-phone');
arrowLeft.addEventListener('click', function () {
  navOnPhone.style.display = 'none';
  window.removeEventListener('scroll', noScroll);
});

navOnPhone.addEventListener('mouseout', function () {
  navOnPhone.style.display = 'none';
});

let burger = document.getElementById('fa-bars');
burger.addEventListener('click', function () {
  navOnPhone.style.display = 'block';
  window.addEventListener('scroll', noScroll);
});

let anchors = document.querySelectorAll('.a-phone');
anchors.forEach((a) => {
  a.addEventListener('click', function () {
    navOnPhone.style.display = 'none';
    window.removeEventListener('scroll', noScroll);
  });
});

// @project
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
  project.addEventListener('click', function () {
    key = project.id;
  });
});

// preventscrolling down
function noScroll() {
  window.scrollTo(0, 0);
}

// control the animation
if (window.screen.availWidth < 991) {
  let hasAnimation = document.querySelectorAll('.has-animation');
  hasAnimation.forEach((el) => {
    el.setAttribute('data-aos', 'fade-up');
  });
}
