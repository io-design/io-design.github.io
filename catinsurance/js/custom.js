var toCheck = document.querySelector('.check2');
var checkBox = document.getElementById('checkBox');

toCheck.addEventListener('click', function() {
  checkBox.click();
  toCheck.classList.toggle("opacity1");
});