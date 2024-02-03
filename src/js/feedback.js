const feedbackClose = document.querySelector('.feedback__modal-close');
const feedbackModal = document.querySelector('.feedback');

const backgroundWhite = document.querySelector('.background-white');
const openFeedbackModal = document.querySelector('.open-feedback');
const callbackModal = document.querySelector('.callback');



openFeedbackModal.addEventListener("click", function () {
  backgroundWhite.classList.add('background-white--active');
  feedbackModal.classList.add('feedback--open');
});

feedbackClose.addEventListener("click", function () {
  backgroundWhite.classList.remove('background-white--active');
  feedbackModal.classList.remove('feedback--open');
});
// for (let btn of modalClose) {
//   btn.onclick = function() {
//     backgroundWhite.classList.remove('background-white--active');
//   feedbackModal.style.visibility = 'hidden';
//   callbackModal.style.visibility = 'hidden';

//   }
// }
