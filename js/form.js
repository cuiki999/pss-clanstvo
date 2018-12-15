const pirateForm = document.getElementById('pirate-form')
const sendButton = document.getElementById('send-form')

// an alert that shows up if not all the required fields are filled
let requiredAlert = document.getElementById('required-alert')
requiredAlert.style.visibility = 'hidden'

// required fields, radio buttons and checkboxes
let requiredTextInput = document.querySelectorAll('.required-text-input')
// [0:name-lastname, 1:date-of-birth, 2:address, 3:post-code, 4:nationality, 5:email]

let requiredPatternInput = document.querySelector('.required-pattern-input')
let requiredEmailInput = document.querySelector('.required-email-input')
// these two still have the class of text input but are declared separately to check validity

let requiredRadio0 = document.querySelectorAll('input[name = "group1"]')
let requiredRadio1 = document.querySelectorAll('input[name = "group2"]')
let requiredRadio2 = document.querySelectorAll('input[name = "group3"]')

let requiredCheckbox1 = document.getElementById('agree1')
let requiredCheckbox2 = document.getElementById('agree2')

// three different types of asterisks and three different types of text in front of which the asterisk appears in case of missing fields, buttons and checkboxes
let asteriskText = document.querySelectorAll('.asterisk-text')
// [0:name-lastname, 1:date-of-birth, 2:address, 3:post-code, 4:nationality, 5:email]

let asteriskRadio = document.querySelectorAll('.asterisk-radio')
// [0:group1, 1:group2, 2:group3]

let asteriskCheckbox = document.querySelectorAll('.asterisk-checkbox')
// [0:agree1, 1:agree2]

// if this equals true after all the checks, the form gets sent
let readyToSend = true

// a little red message that appears when email/post code input is invalid, but not when it's empty
let validate = document.querySelectorAll('.validate')
// [0:post-code, 1:email]

let checkIfTextInput = () => {
  for (let i = 0; i < requiredTextInput.length; i++) {
    if (requiredTextInput[i].value === '') {
      readyToSend = false
      asteriskText[i].style.display = 'inline'
    } else if (requiredTextInput[i].value !== '') {
      asteriskText[i].style.display = 'none'
    }
  }

  if (!requiredPatternInput.validity.valid) {
    readyToSend = false
  }

  if (!requiredEmailInput.validity.valid) {
    readyToSend = false
  }
}

let checkIfRadioInput = (radioGroup, i) => {
  // as many elements as there are radio button groups
  let oneRadioSelected = [false, false, false]

  for (let option = 0; option < radioGroup.length; option++) {
    if (radioGroup[option].checked === true) {
      oneRadioSelected[i] = true
    }
  }

  if (oneRadioSelected[i] === false) {
    readyToSend = false
    asteriskRadio[i].style.display = 'inline'
  } else {
    asteriskRadio[i].style.display = 'none'
  }
}

let checkIfCheckboxes = (checkboxId, i) => {
  if (checkboxId.checked === false) {
    readyToSend = false
    asteriskCheckbox[i].style.display = 'inline'
  } else {
    asteriskCheckbox[i].style.display = 'none'
  }
}

let displayMessageForInvalidInput = () => {
  // if post code pattern is invalid
  if (!requiredPatternInput.validity.valid) {
    validate[0].style.display = 'inline-block'

    // stop displaying the message once the user clicks the input field
    requiredPatternInput.onclick = function () {
      validate[0].style.display = 'none'
    }
  }

  // if email is invalid
  if (!requiredEmailInput.validity.valid) {
    validate[1].style.display = 'inline-block'

    requiredEmailInput.onclick = function () {
      validate[1].style.display = 'none'
    }
  }
}

sendButton.addEventListener('click', function (event) {
  readyToSend = true

  checkIfTextInput()
  checkIfRadioInput(requiredRadio0, 0)
  checkIfRadioInput(requiredRadio1, 1)
  checkIfRadioInput(requiredRadio2, 2)
  checkIfCheckboxes(requiredCheckbox1, 0)
  checkIfCheckboxes(requiredCheckbox2, 1)

  if (readyToSend === true) {
    pirateForm.submit()
    window.location.href = 'confirmation.html'
  } else {
    // event.preventDefault();
    requiredAlert.style.visibility = 'visible'
    displayMessageForInvalidInput()
    window.location.href = '#form-title'
  }
})
