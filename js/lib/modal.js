"use strict";

var modal = document.getElementById('notice-modal');
var closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
  sessionStorage.setItem('closed', 'yes');
});
window.addEventListener('click', function (event) {
  modal.style.display = 'none';
  sessionStorage.setItem('closed', 'yes');
});
document.addEventListener('DOMContentLoaded', function () {
  if (sessionStorage.getItem('closed') !== 'yes') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
});