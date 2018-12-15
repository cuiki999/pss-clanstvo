let fileUploadButton = document.getElementById('file-upload-button')
let sendFileButton = document.getElementById('send-file')
let uploadCheck = document.getElementById('upload-check')

sendFileButton.addEventListener('click', function (event) {
  if (fileUploadButton.value === '') {
    event.preventDefault()
    alert('Prosim, naloži podpisano izjavo!')
    uploadCheck.style.visibility = 'hidden'
  } else {
    uploadCheck.style.visibility = 'visible'
  }
})
