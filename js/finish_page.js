// this is just test code to toggle between different ways in which the user can land on the finishing page. This will be built upon later.

let allStepsFinished = document.getElementById('all-steps-finished')
let twoStepsSkipped = document.getElementById('two-steps-skipped')

let buttonScenario1 = document.getElementById('scenario1')
let buttonScenario2 = document.getElementById('scenario2')

buttonScenario1.addEventListener('click', function () {
	twoStepsSkipped.style.display = 'none';
	allStepsFinished.style.display = 'block'
})

buttonScenario2.addEventListener('click', function () {
	twoStepsSkipped.style.display = 'block';
	allStepsFinished.style.display = 'none'
})

