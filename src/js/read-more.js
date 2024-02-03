
const readMore = document.querySelector('.read-more-click');
const readMoreText =  document.querySelector('.read-more__text');
const aboutUs = document.querySelector('.about-us__text');
const readMoreImg = document.querySelector('.read-more__img');
let allHidden = true;

readMore.addEventListener('click', function () {
  readMoreImg.classList.toggle('read-more__img--rotate');
  // aboutUs.classList.toggle('about-us__text--hidden');
  if (allHidden){ 
    aboutUs.style.height = aboutUs.scrollHeight + "px";
    readMoreText.textContent= "Скрыть";
   allHidden=false;
  } else {
    aboutUs.style.height = "134.5px";
    readMoreText.textContent= "Читать далее";
    allHidden = true;
  }

});
