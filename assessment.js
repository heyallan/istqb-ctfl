displayPoints()
displayScore()
displayStatus()
displayTime()
refillForm()

// form
const form = document.forms[0];
const assessmentId = form.getAttribute('id');
const messageTimesUp = '⏰ Times up';

if (getStatus(assessmentId) === 'fail' || getStatus(assessmentId) === 'pass') {
	form.classList.add('highlight-answers');
}

// max score
const maxScore = 100;
document.querySelector('.max-score').innerText = maxScore;

// max points
const maxPoints = document.querySelectorAll('fieldset').length;
document.querySelector('.max-points').innerText = maxPoints;

window.addEventListener('click', function(event) {

	// get clicked button
	const button = event.target.closest('button');
	if (button === null) return false;

	// start assessment
	if (button.matches('[data-action="start"]')) {
		// reset any existing values
		form.classList.remove('highlight-answers');
		resetTimer(assessmentId);
		setPoints(assessmentId,'0');
			displayPoints();
		setScore(assessmentId,'0');
			displayScore();
		// start current assessment
		timerInterval = setInterval(updateTimer, 1000);
		setStatus(assessmentId, 'in-progress');
			displayStatus();
	}

	// finish assessment
	if (button.matches('[data-action="finish"]')) {
		// highlight results
		form.classList.add('highlight-answers');
		// data points
		const answers = [];
		let actualPoints = 0;
		let actualScore = 0;

		// count data
		for (const input of form.querySelectorAll('input')) {
			// skip empty answers
			if (input.checked === false) continue;
			// mark incorrect answers
			if (input.value === '0') {
				const status = document.createElement('span');
				status.innerText = ' (Incorrect)';
				status.classList.add('color-red');
				input.closest('fieldset').querySelector('legend').insertAdjacentElement('beforeend', status);
			}
			// accumulate
			answers.push([input.id, input.value]);
			actualPoints += parseInt(input.value);
		}
		// save answers to memory
		localStorage.setItem(form.id, JSON.stringify(answers));
		// compute results
		actualScore = (actualPoints / maxPoints) * 100;
		// update interface
		stopTimer(assessmentId);
		displayTime();
		setPoints(assessmentId, actualPoints);
			displayPoints();
		setScore(assessmentId, actualScore);
			displayScore();
		setStatus(assessmentId, (actualScore >= 65) ? 'pass' : 'fail');
			displayStatus();
	}

	// reset
	if (button.matches('[data-action="reset"]')) {
		const id = button.closest('form')?.id || button.getAttribute('data-from');
		form.classList.remove('highlight-answers');
		form.reset();
		reset(id);
	}

}); // click event listener


