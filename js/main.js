const button = document.querySelectorAll("[data-button]");
const text = document.querySelector("[data-text]");

button.forEach(function (item) {
    item.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("question__content-text")
    });
});

const swiper = new Swiper(".swiper__slide", {
  
    spaceBetween:20,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper__button-right',
        prevEl: '.swiper__button-left',
    },
  
  



});

const buttons = document.querySelector("[data-button]");
const content = document.querySelector("[data-content]");

buttons.addEventListener("click" , function(){
     content.classList.toggle("list")
});
