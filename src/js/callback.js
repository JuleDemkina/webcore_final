
const backgroundWhite = document.querySelector('.background-white');
const aside =  document.querySelector('.aside');
const callbackModal = document.querySelector('.callback');
const callbackClose = document.querySelector('.callback__modal-close');
const callbackOpen = document.querySelector('.modal-open-callback');



callbackOpen.addEventListener("click", function () {
  backgroundWhite.classList.add('background-white--active');
  callbackModal.classList.add('callback--open');
});

callbackClose.addEventListener("click", function () {
  backgroundWhite.classList.remove('background-white--active');
  callbackModal.classList.remove('callback--open');
});


