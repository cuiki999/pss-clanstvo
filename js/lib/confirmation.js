"use strict";

var redoForm = document.getElementById('redo-form');
var successfulForm = document.getElementById('form-successful');
var unsuccessfulForm = document.getElementById('form-unsuccessful');
var downloadForm = document.getElementById('download-form'); // uploading on a computer

var compUploadFrame = document.getElementById('comp-upload');
var fileUploadButton = document.getElementById('file-upload-button');
var sendFileButton = document.getElementById('send-file');
var uploadCheck = document.getElementById('upload-check'); // uploading with a phone

var phoneUploadFrame = document.getElementById('phone-upload');
var fileUploadButtonCam = document.getElementById('file-upload-button-cam');
var sendFileButtonCam = document.getElementById('send-file-cam');
var uploadCheckCam = document.getElementById('upload-check-cam'); // when clicking 'Popravi podatke'

redoForm.addEventListener('click', function () {
  localStorage.setItem('form', 'skip');
});

var toggleSuccessfulUnsuccessful = function toggleSuccessfulUnsuccessful() {
  if (localStorage.getItem('form') !== 'ok' || localStorage.getItem('form') === 'ok' && localStorage.getItem('missingForm') === 'missing') {
    successfulForm.style.display = 'none';
    unsuccessfulForm.style.display = 'block';
  }
};

toggleSuccessfulUnsuccessful();
downloadForm.addEventListener('click', function () {
  alert('Ta funkcija zaenkrat ne deluje');
});
sendFileButton.addEventListener('click', function (event) {
  if (fileUploadButton.value === '') {
    event.preventDefault();
    alert('Prosim, naloži podpisano izjavo.');
    uploadCheck.style.visibility = 'hidden';
  } else {
    uploadCheck.style.visibility = 'visible';
  }
});
sendFileButtonCam.addEventListener('click', function (event) {
  if (fileUploadButtonCam.value === '') {
    event.preventDefault();
    alert('Prosim, slikaj in naloži podpisano izjavo.');
    uploadCheckCam.style.visibility = 'hidden';
  } else {
    uploadCheckCam.style.visibility = 'visible';
  }
});