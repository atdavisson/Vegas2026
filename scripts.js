const hamburger = document.getElementsByClassName('hamburger');
const main = document.getElementsByClassName('mainContainer');

hamburger[0].addEventListener("click", function(){
    main[0].classList.toggle("blurred");
})