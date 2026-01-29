const hamburger = document.getElementsByClassName('hamburger');
const main = document.getElementsByClassName('mainContainer');
const menu = document.getElementsByid('menu');

hamburger[0].addEventListener("click", function(){
    main[0].classList.toggle("blurred");
    menu[0].classList.toggle("noblur");
})