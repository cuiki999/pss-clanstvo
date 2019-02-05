let redoForm = document.getElementById('redo-form');
let successfulForm = document.getElementById('form-successful');
let unsuccessfulForm = document.getElementById('form-unsuccessful');
let downloadForm = document.getElementById('download-form');

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

// when clicking 'Popravi podatke'
redoForm.addEventListener('click', function () {
  localStorage.setItem('form', 'skip');
});

let toggleSuccessfulUnsuccessful = () => {
  if (localStorage.getItem('form') !== 'ok' || localStorage.getItem('form') === 'ok' && localStorage.getItem('missingForm') === 'missing') {
    successfulForm.style.display = 'none';
    unsuccessfulForm.style.display = 'block';
  }
};

toggleSuccessfulUnsuccessful();

downloadForm.addEventListener('click', function () {
  alert('Ta funkcija zaenkrat ne deluje');
})

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