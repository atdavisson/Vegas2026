const hamburger = document.getElementsByClassName('hamburger');
const main = document.getElementsByClassName('mainContainer');

hamburger.addEventListener('click', function() {
  main.classList.add("blurred");
});