let redoForm = document.getElementById('redo-form');

// uploading on a computer
let compUploadFrame = document.getElementById('comp-upload');
let fileUploadButton = document.getElementById('file-upload-button');
let sendFileButton = document.getElementById('send-file');
let uploadCheck = document.getElementById('upload-check');

// uploading with a phone
let phoneUploadFrame = document.getElementById('phone-upload');
let fileUploadButtonCam = document.getElementById('file-upload-button-cam');
let sendFileButtonCam = document.getElementById('send-file-cam');
let uploadCheckCam = document.getElementById('upload-check-cam');

redoForm.addEventListener('click', function () {
  localStorage.setItem('form', 'skip');
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