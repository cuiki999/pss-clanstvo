"use strict";

var allStepsFinished = document.getElementById('all-steps-finished');
var twoStepsSkipped = document.getElementById('two-steps-skipped');
var clearStorage = document.getElementById('clear-storage'); // progress bar circles in finish.html

var finC1 = document.getElementById('fin-c-1');
var finC2 = document.getElementById('fin-c-2');
var finC3 = document.getElementById('fin-c-3');
var finC4 = document.getElementById('fin-c-4'); // progress bar labels in finish.html (numbers inside the circles)

var finL1 = document.getElementById('fin-l-1');
var finL2 = document.getElementById('fin-l-2');
var finL3 = document.getElementById('fin-l-3');
var finL4 = document.getElementById('fin-l-4'); // unless the step has been done, the current circle is always active - orange color

var checkIfActiveCircle = function checkIfActiveCircle() {
  if (localStorage.getItem('form') === 'ok' && localStorage.getItem('conf') === 'ok' && localStorage.getItem('pay') === 'ok') {
    finC4.classList.add('done');
    finL4.innerHTML = '&#10003';
    allStepsFinished.style.display = 'block';
    localStorage.setItem('fin', 'ok');
  } else {
    finC4.classList.add('active');
    twoStepsSkipped.style.display = 'block';
    localStorage.setItem('fin', 'skip');
  }
};

checkIfActiveCircle(); // depending on whether certain steps have been skipped or done, the circles get the appropriate classes for this particular html page

var giveClass = function giveClass(page, circle, label) {
  if (localStorage.getItem(page) === 'ok') {
    circle.classList.add('done');
    label.innerHTML = '&#10003';
  }

  if (localStorage.getItem(page) === 'skip') {
    circle.classList.add('skipped');
  }
};

giveClass('form', finC1, finL1);
giveClass('conf', finC2, finL2);
giveClass('pay', finC3, finL3);

var disableLink = function disableLink(page, circle) {
  if (localStorage.getItem(page) === null) {
    circle.addEventListener('click', function (event) {
      event.preventDefault();
    });
    circle.addEventListener('mouseover', function (event) {
      circle.style.cursor = 'default';
    });
  }
};

disableLink('form', finC1);
disableLink('conf', finC2);
disableLink('pay', finC3); // for development

clearStorage.addEventListener('click', function () {
  var clearMessage = confirm('Vsi podatki bodo pobrisani. Želiš nadaljevati?');

  if (clearMessage === true) {
    localStorage.clear();
    window.location.href = 'index.html';
  }
});