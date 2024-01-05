const messages = {
	ready: 'Ready',
	inProgress: '📝 In progress',
	pass: '✅ Pass',
	fail: '❌ Fail'
}
function setPoints(id, value) {
	localStorage.setItem(`${id}-points`, value);
}

function displayPoints() {
	document.querySelectorAll('[data-action="get-points"]').forEach(function(item) {
		const id = item.closest('form')?.id || item.getAttribute('data-from');
		const points = localStorage.getItem(`${id}-points`);
		item.innerText = points || 0;
	});
}


function setScore(id, value) {
	localStorage.setItem(`${id}-score`, value);
}

function displayScore() {
	document.querySelectorAll('[data-action="get-score"]').forEach(function(item) {
		const id = item.closest('form')?.id || item.getAttribute('data-from');
		const points = localStorage.getItem(`${id}-score`);
		item.innerText = points || 0;
	});
}

function getStatus(id) {
	return localStorage.getItem(`${id}-status`) || 'Ready';
}

function setStatus(id, value) {
	return localStorage.setItem(`${id}-status`, value);
}

function displayStatus() {
	document.querySelectorAll('[data-action="get-status"]').forEach(function(item) {
		const id = item.closest('form')?.id || item.getAttribute('data-from');
		const status = getStatus(id);
		let message = '';
		switch (status) {
			case 'in-progress':
				message = messages.inProgress;
				break;
			case 'fail':
				message = messages.fail;
				break;
			case 'pass':
				message = messages.pass;
				break;
			default:
				message = messages.ready;
		}
		item.innerText = message;
	});
}


function refillForm() {
	const formId = document.forms[0]?.id;
	if (!formId) { return; }
	const options = JSON.parse(localStorage.getItem(formId));
	if (!options) { return; }
	for (let optionName of options) {
		optionName = optionName[0];
		document.querySelector(`[name="${optionName}"]`).checked = true;
    }
}


const timer = document.querySelector('[data-action="get-time"]');
let timerInterval;
let seconds = 0;
let minutes = 0;
function formatNumbers(minutes, seconds) {
	const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
	const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
	return `${formattedMinutes}:${formattedSeconds}`
}
function updateTimer() {
	seconds++;
    if (seconds === 60) {
		seconds = 0;
		minutes++;
	}
	timer.textContent = formatNumbers(minutes, seconds);
	if (minutes === 60) {
		clearInterval(timerInterval);
		alert(messageTimesUp);
	}
}
function stopTimer(id) {
	// stop interval
	clearInterval(timerInterval);
	// save time
	const currentTime = formatNumbers(minutes, seconds);
	window.localStorage.setItem(`${id}-time`, currentTime)
}
function resetTimer(id) {
	// flush interval
	clearInterval(timerInterval);
	// flush accumulator
	seconds = 0;
	minutes = 0;
	// flush memory
	window.localStorage.setItem(`${id}-time`, formatNumbers(minutes, seconds))
	// flush interface
	displayTime();
}
function displayTime() {
	document.querySelectorAll('[data-action="get-time"]').forEach(function(item) {
		const id = item.closest('form')?.id || item.getAttribute('data-from');
		item.innerText = window.localStorage.getItem(`${id}-time`) || '00:00';
	})
}

function reset(id) {
	setPoints(id, 0);
		displayPoints();
	resetTimer(id);
		displayTime();
	setScore(id, 0);
		displayScore();
	setStatus(id, 'ready');
		displayStatus();
	localStorage.removeItem(id);
}
