

let allContentButtonBrands = document.querySelector(".slider-1");
let moreBrends = document.querySelector(".more-brends");
let moreBrendsText = document.querySelector(".more-brends__text");
let moreBrendsImg = document.querySelector(".more-brends__img");
let checkBrands = false;

moreBrends.addEventListener("click", function (evt) {
  moreBrendsImg.classList.toggle('read-more__img--rotate');
  if (!checkBrands) {
    allContentButtonBrands.style.height = allContentButtonBrands.scrollHeight + "px";
    moreBrendsText.textContent = "Скрыть";
    checkBrands = true;
  } else {
    allContentButtonBrands.style.height = "164px";
    moreBrendsText.textContent = "Показать все";
    checkBrands = false;
    
  }
});