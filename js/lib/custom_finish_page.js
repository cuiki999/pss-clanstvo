"use strict";

// This code takes care of addressing the new (successfully enrolled) member by their first name and their gender. If there is no data available from form.html, the default gender is male and the first name gets left out.
// This code also takes care of displaying the steps that the user still has to take before they become a full member.
var customName = document.getElementById('custom-name');
var customGender1 = document.getElementById('custom-gender1');
var customGender2 = document.getElementById('custom-gender2');
var stepsLeft1 = document.getElementById('steps-left1');
var stepsLeft2 = document.getElementById('steps-left2');
var formListItem = document.getElementById('form-remains');
var confListItem = document.getElementById('confirmation-remains');
var payListItem = document.getElementById('payment-remains'); // count how many steps have to be taken before the user becomes a member - see countSteps() below

var stepCounter = 0;

var outputName = function outputName() {
  var firstName = localStorage.getItem('name');

  if (firstName === '' || firstName === null) {
    customName.innerHTML = 'D';
  } else {
    customName.innerHTML = firstName + ', d';
  }
};

outputName();

var outputGender = function outputGender() {
  var gender = localStorage.getItem('gender');

  if (gender === 'female') {
    customGender1.innerHTML = 'obrodošla';
    customGender2.innerHTML = 'dobila';
  } else if (gender === 'male') {
    customGender1.innerHTML = 'obrodošel';
    customGender2.innerHTML = 'dobil';
  }
};

outputGender();

var countSteps = function countSteps() {
  var formStatus = localStorage.getItem('form');
  var confStatus = localStorage.getItem('conf');
  var payStatus = localStorage.getItem('pay');

  if (formStatus !== 'ok') {
    stepCounter++;
    formListItem.style.display = 'list-item';
  }

  if (confStatus !== 'ok') {
    stepCounter++;
    confListItem.style.display = 'list-item';
  }

  if (payStatus !== 'ok') {
    stepCounter++;
    payListItem.style.display = 'list-item';
  }
};

countSteps();

var changeMessageWithStepCount = function changeMessageWithStepCount() {
  if (stepCounter === 1) {
    stepsLeft1.innerHTML = 'Do včlanitve te čaka še en korak!';
    stepsLeft2.innerHTML = 'en korak';
  } else if (stepCounter === 2) {
    stepsLeft1.innerHTML = 'Do včlanitve te čakata še dva koraka!';
    stepsLeft2.innerHTML = 'dva koraka';
  } else if (stepCounter === 3) {
    stepsLeft1.innerHTML = 'Do včlanitve te čakajo še trije koraki!';
    stepsLeft2.innerHTML = 'tri korake';
  }
};

changeMessageWithStepCount();