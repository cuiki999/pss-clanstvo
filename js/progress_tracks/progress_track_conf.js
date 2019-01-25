// buttons for either progressing or skipping the current page
const doneConf = document.getElementById('send-confirmation');
const skippedConf = document.getElementById('skip-confirmation');

// progress bar circles in confirmation.html
let confC1 = document.getElementById('conf-c-1');
let confC2 = document.getElementById('conf-c-2');
let confC3 = document.getElementById('conf-c-3');
let confC4 = document.getElementById('conf-c-4');

// progress bar labels in confirmation.html (numbers inside the circles)
let confL1 = document.getElementById('conf-l-1');
let confL2 = document.getElementById('conf-l-2');
let confL3 = document.getElementById('conf-l-3');
let confL4 = document.getElementById('conf-l-4');

// unless the step has been done, the current circle is always active - orange color
let checkIfActiveCircle = () => {
  if (localStorage.getItem('conf') !== 'ok') {
    localStorage.setItem('conf', 'skip');
    confC2.classList.add('active');
  } else {
    confC2.classList.add('done');
    confL2.innerHTML = '&#10003';
  }
};

checkIfActiveCircle();

// depending on whether certain steps have been skipped or done, the circles get the appropriate classes for this particular html page
let giveClass = (page, circle, label) => {
  if (localStorage.getItem(page) === 'ok') {
    circle.classList.add('done');
    label.innerHTML = '&#10003';
  }

  if (localStorage.getItem(page) === 'skip') {
    circle.classList.add('skipped');
  }
};

giveClass('form', confC1, confL1);
giveClass('pay', confC3, confL3);
giveClass('fin', confC4, confL4);

// if a step hasn't been accessed yet, the link to it becomes deactivated
let disableLink = (page, circle) => {
  if (localStorage.getItem(page) === null) {
    circle.addEventListener('click', function (event) {
      event.preventDefault();
    });

    circle.addEventListener('mouseover', function (event) {
      circle.style.cursor = 'default';
    });
  }
};

disableLink('form', confC1);
disableLink('pay', confC3);
disableLink('fin', confC4);

// if you finish the step, the local storage gets the value 'ok' for that step so that you can use it later
doneConf.addEventListener('click', function (event) {
  localStorage.setItem('form', 'ok');
  localStorage.setItem('conf', 'ok');
  if (localStorage.getItem('pay') === 'ok') {
    event.preventDefault();
    window.location.href = 'finish.html';
  }
});

// if you skip this step, the local storage gets the value 'skip', but only if it hasn't been completed before, in which case it stays completed indefinitely
skippedConf.addEventListener('click', function () {
  if (localStorage.getItem('conf') !== 'ok') {
    localStorage.setItem('conf', 'skip');
  }
});
