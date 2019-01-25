// buttons for either progressing or skipping the current page
const donePay = document.getElementById('send-payment');
const skippedPay = document.getElementById('skip-payment');

// progress bar circles in payment.html
let payC1 = document.getElementById('pay-c-1');
let payC2 = document.getElementById('pay-c-2');
let payC3 = document.getElementById('pay-c-3');
let payC4 = document.getElementById('pay-c-4');

// progress bar labels in payment.html (numbers inside the circles)
let payL1 = document.getElementById('pay-l-1');
let payL2 = document.getElementById('pay-l-2');
let payL3 = document.getElementById('pay-l-3');
let payL4 = document.getElementById('pay-l-4');

// unless the step has been done, the current circle is always active - orange color
let checkIfActiveCircle = () => {
  if (localStorage.getItem('pay') !== 'ok') {
    localStorage.setItem('pay', 'skip');
    payC3.classList.add('active');
  } else {
    payC3.classList.add('done');
    payL3.innerHTML = '&#10003';
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

giveClass('form', payC1, payL1);
giveClass('conf', payC2, payL2);
giveClass('fin', payC4, payL4);

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

disableLink('form', payC1);
disableLink('conf', payC2);
disableLink('fin', payC4);

// if you finish the step, the local storage gets the value 'ok' for that step so that you can use it later
donePay.addEventListener('click', function () {
  localStorage.setItem('pay', 'ok');
});

// if you skip this step, the local storage gets the value 'skip', but only if it hasn't been completed before, in which case it stays completed indefinitely
skippedPay.addEventListener('click', function () {
  if (localStorage.getItem('pay') !== 'ok') {
    localStorage.setItem('pay', 'skip');
  }
});
