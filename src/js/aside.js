const backgroundWhite = document.querySelector('.background-white');
const aside =  document.querySelector('.aside');

const burgerMenu = document.querySelector('.button-burger');
const btnClose = document.querySelector('.button-aside-close');

const modalOpenFeedback = document.querySelector('.modal-open-feedback');
const modalOpenCalldback = document.querySelector('.modal-open-callback');



const feedbackModal = document.querySelector('.feedback');
const callbackModal = document.querySelector('.callback');



burgerMenu.onclick = function () {
  backgroundWhite.classList.add('background-white--active');
  aside.classList.add('aside--open');
}

btnClose.onclick = function () {
  backgroundWhite.classList.remove('background-white--active');
  aside.classList.remove('aside--open');
}

backgroundWhite.onclick = function () {
  backgroundWhite.classList.remove('background-white--active');
  aside.classList.remove('aside--open');
  feedbackModal.classList.remove('feedback--open');
  callbackModal.classList.remove('callback--open');;
}


const callbackOpenAside = document.querySelector('.open__callback');
callbackOpenAside.addEventListener("click", function () {
  backgroundWhite.classList.add('background-white--active');
  callbackModal.classList.add('callback--open');
  aside.classList.remove('aside--open');
});

modalOpenFeedback.addEventListener("click", function () {
  backgroundWhite.classList.add('background-white--active');
  feedbackModal.classList.add('feedback--open');
  aside.classList.remove('aside--open');
});

