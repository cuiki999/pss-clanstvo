let fileUploadButton = document.getElementById('file-upload-button');
let fileUploadLine = document.getElementById('file-upload-line');
let sendFileButton = document.getElementById('send-file');
let uploadCheck = document.getElementById('upload-check');



sendFileButton.addEventListener('click', function(event) {
	
	if (fileUploadButton.value == '' || fileUploadButton.files[0].type !== 'application/pdf') {
		event.preventDefault();
		alert('Prosim, naloži izjavo v .pdf formatu!');
		uploadCheck.style.visibility = 'hidden';
	}

	else {
		uploadCheck.style.visibility = 'visible';
	}
});
