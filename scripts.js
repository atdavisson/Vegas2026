const hamburger = document.getElementsByClassName('hamburger');
const main = document.getElementById('mainContainer');

hamburger.addEventListener('click', function() {
  main.classList.toggle('blurred');
});