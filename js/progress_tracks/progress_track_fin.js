let allStepsFinished = document.getElementById('all-steps-finished');
let twoStepsSkipped = document.getElementById('two-steps-skipped');
const clearStorage = document.getElementById('clear-storage');

// progress bar circles in finish.html
let finC1 = document.getElementById('fin-c-1');
let finC2 = document.getElementById('fin-c-2');
let finC3 = document.getElementById('fin-c-3');
let finC4 = document.getElementById('fin-c-4');

// progress bar labels in finish.html (numbers inside the circles)
let finL1 = document.getElementById('fin-l-1');
let finL2 = document.getElementById('fin-l-2');
let finL3 = document.getElementById('fin-l-3');
let finL4 = document.getElementById('fin-l-4');

// unless the step has been done, the current circle is always active - orange color
let checkIfActiveCircle = () => {
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

giveClass('form', finC1, finL1);
giveClass('conf', finC2, finL2);
giveClass('pay', finC3, finL3);

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

disableLink('form', finC1);
disableLink('conf', finC2);
disableLink('pay', finC3);

// for development
clearStorage.addEventListener('click', function () {
  localStorage.clear();
});
