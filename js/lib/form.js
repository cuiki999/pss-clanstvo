"use strict";

var pirateForm = document.getElementById('pirate-form');
var sendButton = document.getElementById('send-form'); // an alert that shows up if not all the required fields are filled

var requiredAlert = document.getElementById('required-alert');
requiredAlert.style.visibility = 'hidden'; // required fields, radio buttons and checkboxes

var requiredTextInput = document.querySelectorAll('.required-text-input'); // [0:name-lastname, 1:date-of-birth, 2:address, 3:post-code, 4:nationality, 5:email]

var requiredPatternInput = document.querySelector('.required-pattern-input');
var requiredEmailInput = document.querySelector('.required-email-input'); // these two still have the class of text input but are declared separately to check validity

var requiredRadio0 = document.querySelectorAll('input[name = "group1"]');
var requiredRadio1 = document.querySelectorAll('input[name = "group2"]');
var requiredRadio2 = document.querySelectorAll('input[name = "group3"]');
var requiredCheckbox1 = document.getElementById('agree1');
var requiredCheckbox2 = document.getElementById('agree2'); // three different types of asterisks and three different types of text in front of which the asterisk appears in case of missing fields, buttons and checkboxes

var asteriskText = document.querySelectorAll('.asterisk-text'); // [0:name-lastname, 1:date-of-birth, 2:address, 3:post-code, 4:nationality, 5:email]

var asteriskRadio = document.querySelectorAll('.asterisk-radio'); // [0:group1, 1:group2, 2:group3]

var asteriskCheckbox = document.querySelectorAll('.asterisk-checkbox'); // [0:agree1, 1:agree2]
// if this equals true after all the checks, the form gets sent

var readyToSend = true; // a little red message that appears when email/post code input is invalid, but not when it's empty

var validate = document.querySelectorAll('.validate'); // [0:post-code, 1:email]

var checkIfTextInput = function checkIfTextInput() {
  for (var i = 0; i < requiredTextInput.length; i++) {
    if (requiredTextInput[i].value === '') {
      readyToSend = false;
      asteriskText[i].style.display = 'inline';
    } else if (requiredTextInput[i].value !== '') {
      asteriskText[i].style.display = 'none';
    }
  }

  if (!requiredPatternInput.validity.valid) {
    readyToSend = false;
  }

  if (!requiredEmailInput.validity.valid) {
    readyToSend = false;
  }
};

var checkIfRadioInput = function checkIfRadioInput(radioGroup, i) {
  // as many elements as there are radio button groups
  var oneRadioSelected = [false, false, false];

  for (var option = 0; option < radioGroup.length; option++) {
    if (radioGroup[option].checked === true) {
      oneRadioSelected[i] = true;
    }
  }

  if (oneRadioSelected[i] === false) {
    readyToSend = false;
    asteriskRadio[i].style.display = 'inline';
  } else {
    asteriskRadio[i].style.display = 'none';
  }
};

var checkIfCheckboxes = function checkIfCheckboxes(checkboxId, i) {
  if (checkboxId.checked === false) {
    readyToSend = false;
    asteriskCheckbox[i].style.display = 'inline';
  } else {
    asteriskCheckbox[i].style.display = 'none';
  }
};

var displayMessageForInvalidInput = function displayMessageForInvalidInput() {
  // if post code pattern is invalid
  if (!requiredPatternInput.validity.valid) {
    validate[0].style.display = 'inline-block'; // stop displaying the message once the user clicks the input field

    requiredPatternInput.onclick = function () {
      validate[0].style.display = 'none';
    };
  } // if email is invalid


  if (!requiredEmailInput.validity.valid) {
    validate[1].style.display = 'inline-block';

    requiredEmailInput.onclick = function () {
      validate[1].style.display = 'none';
    };
  }
}; // save the name so that you can use it on the finishing page, addressing the new member by first name


var saveName = function saveName() {
  var nameValue = document.getElementById('name-lastname').value;
  var stringSplit = nameValue.split(' ');
  var newNameValue = stringSplit[0];
  localStorage.setItem('name', newNameValue);
};

var saveGender = function saveGender() {
  if (requiredRadio0[1].checked) {
    localStorage.setItem('gender', 'female');
  } else {
    localStorage.setItem('gender', 'male');
  }
};

sendButton.addEventListener('click', function (event) {
  readyToSend = true; // this is an indication that this step is done (so the circle turns blue), unless you rewrite it in the 'else' statement below

  localStorage.setItem('form', 'ok');
  localStorage.setItem('conf', 'skip');
  checkIfTextInput();
  checkIfRadioInput(requiredRadio0, 0);
  checkIfRadioInput(requiredRadio1, 1);
  checkIfRadioInput(requiredRadio2, 2);
  checkIfCheckboxes(requiredCheckbox1, 0);
  checkIfCheckboxes(requiredCheckbox2, 1);
  saveName();
  saveGender();

  if (readyToSend === true) {
    pirateForm.submit();
    window.location.href = 'confirmation.html';
  } else {
    localStorage.setItem('form', 'skip');
    requiredAlert.style.visibility = 'visible';
    displayMessageForInvalidInput();
    window.location.href = '#form-title';
  }
});