// buttons for either progressing or skipping the current page
// const doneForm = document.getElementById('send-form');
const skippedForm = document.getElementById('skip-form');

// progress bar circles in form.html
let formC1 = document.getElementById('form-c-1');
let formC2 = document.getElementById('form-c-2');
let formC3 = document.getElementById('form-c-3');
let formC4 = document.getElementById('form-c-4');

// progress bar labels in form.html (numbers inside the circles)
let formL1 = document.getElementById('form-l-1');
let formL2 = document.getElementById('form-l-2');
let formL3 = document.getElementById('form-l-3');
let formL4 = document.getElementById('form-l-4');

// unless the step has been done, the current circle is always active - orange color
let checkIfActiveCircle = () => {
  if (localStorage.getItem('form') !== 'ok') {
    localStorage.setItem('form', 'skip');
    formC1.classList.add('active');
  } else {
    formC1.classList.add('done');
    formL1.innerHTML = '&#10003';
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

giveClass('conf', formC2, formL2);
giveClass('pay', formC3, formL3);
giveClass('fin', formC4, formL4);

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

disableLink('conf', formC2);
disableLink('pay', formC3);
disableLink('fin', formC4);

// if you skip this step, the local storage gets the value 'skip', but only if it hasn't been completed before, in which case it stays completed indefinitely
skippedForm.addEventListener('click', function () {
  if (localStorage.getItem('form') !== 'ok') {
    localStorage.setItem('form', 'skip');
  }
});

// if you complete this step, the local storage gets set within form.js, after you press the send button.
