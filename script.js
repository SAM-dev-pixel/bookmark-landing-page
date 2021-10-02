const header =  document.querySelector('header');
const pageScroll =(page)=> {
  page.addEventListener('scroll', () => {
    (page.pageYOffset >= 50) ? header.classList.add('active') : header.classList.remove('active');
  });
}
pageScroll(window);

const navLinks = document.querySelector(".nav-links");
const navLogo = document.querySelector('.nav-logo img');
const clickBurger =(burger)=> {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('active');
    for(let li of document.querySelectorAll('.feature-navbar li')) {
      li.classList.toggle('on');
    }
    (navLinks.classList.contains('active')) ? burger.src = 'img/icon-close.svg' : burger.src = 'img/icon-hamburger.svg';
    (navLinks.classList.contains('active')) ? navLogo.src = 'img/logo-bookmark-white.svg' :navLogo.src = 'img/logo-bookmark.svg';
  });
}
clickBurger(document.querySelector('.burger-btn'));

const featureNavbarLi = document.querySelectorAll('.feature-navbar li');
const featureNavbarChoice = document.querySelectorAll('.feature-navbar p');
const features = document.querySelectorAll('.feature');

for(let i = 0; i < featureNavbarLi.length; i++) {
  featureNavbarChoice[i].addEventListener('click', (e) => {
    for(let li of featureNavbarLi) {
      li.classList.remove('active');
    }
    e.target.parentElement.classList.add('active');
    if(e.target.classList.contains('one')) {
      features[0].style.marginLeft = '0';
    } else if(e.target.classList.contains('two')) {
      features[0].style.marginLeft = '-100%';
    } else if(e.target.classList.contains('three')) {
      features[0].style.marginLeft = '-200%';
    }
  });
}

const questionsCons = document.querySelectorAll('.question');
const subQuestions = document.querySelectorAll('.sub-question');
const answers = document.querySelectorAll('.answer-txt');
const arrowBtns = document.querySelectorAll('.arrow-btn');
const arrowBtnsImg = document.querySelectorAll('.arrow-btn img');
for(let i = 0; i < subQuestions.length; i++) {
  subQuestions[i].addEventListener('click', e => {
    answers[i].classList.toggle('active');
    arrowBtns[i].classList.toggle('active');
    (arrowBtns[i].classList.contains('active')) ? arrowBtnsImg[i].src = 'img/icon-arrow-red.svg' : arrowBtnsImg[i].src = 'img/icon-arrow.svg';
  });
}



const contactBtn = document.querySelector('.contact-btn');
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.querySelector('.email-input');
/*contactBtn.addEventListener('click', function(e) {
  const email = document.querySelector('.email-input');
  if(email.value.match(mailformat)) {
  alert("Valid email address!");
  document.form1.text1.focus();
  return true;
} else {
  alert("You have entered an invalid email address!");
  e.preventDefault();
  document.form1.text1.focus();
  return false;
}
});*/

contactBtn.addEventListener('click', function(e){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(email.value.match(emailPattern)) {
    return true;
  } else {
    e.preventDefault();
    document.querySelector('.input-contain').classList.add('active');
    document.querySelector('.icon-error').classList.add('active');
    document.querySelector('.txt-error').classList.add('active');
  }
} 
);
/*

regex

(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

*/

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/