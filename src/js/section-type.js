const allContentButtonType = document.querySelector(".slider-2");
const moreType = document.querySelector(".more-type");
const moreTypeText = document.querySelector(".more-type__text");
const moreTypeImg = document.querySelector(".more-type__img");
let checkType = false;


moreType.addEventListener("click", function (evt) {
  if (!checkType) {
    allContentButtonType.style.height = allContentButtonType.scrollHeight + "px";
    moreTypeText.textContent = "Скрыть";
    moreTypeImg.classList.add("read-more__img--rotate");
    checkType = true;
  } else {
    allContentButtonType.style.height = "164px";
    moreTypeText.textContent = "Показать все";
    checkType = false;
    moreTypeImg.classList.remove("read-more__img--rotate");
  }
});