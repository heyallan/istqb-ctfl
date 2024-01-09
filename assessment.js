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

	// get the button
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
		form.classList.add('highlight-answers');
		const formData = new FormData(form);
		let answers = [];
		// variables
		let actualPoints = 0;
		let actualScore = 0;
		let message = '';
		// iterate FormData values
		for (const [name, value] of formData) {
			answers.push([name, value]);
			if (value === '1') { actualPoints++ }
			else {}
		}
		// save answers
		answers = JSON.stringify(answers);
		localStorage.setItem(form.id, answers);
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


