const hamburger = document.getElementById('hamburger');
const main = document.getElementById('mainContainer');

hamburger.addEventListener('click', function() {
  main.classList.toggle('blurred');
});