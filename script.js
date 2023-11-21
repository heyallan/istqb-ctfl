/**
 * Utility functions
 */

function updatePoints(value) {
    document.querySelector('.actual-points').innerText = value;
}
function updateScore(value) {
    document.querySelector('.actual-score').innerText = value;
}
function updateMessage(value) {
    document.querySelector('.stats .message').innerText = value;
}

/**
 * --------------------------------------------------
 * Static data
 * --------------------------------------------------
 */

// max score
const maxScore = 100;
document.querySelector('.max-score').innerText = maxScore;

// max points
const maxPoints = document.querySelectorAll('fieldset').length;
document.querySelector('.max-points').innerText = maxPoints;

// timer
const startButton = document.querySelector('[data-action="start"]');
const timer = document.querySelector('.timer');
let seconds = 0;
let minutes = 0;

/**
 * --------------------------------------------------
 * Get data from query string
 * @type {URLSearchParams}
 * --------------------------------------------------
 */
// const searchParams = new URLSearchParams(window.location.search)
//
// if (searchParams.size > 0) {
//     for (const [key, value] of searchParams.entries()) {
//         document.querySelector(`input[name=${key}]`).click();
//     }
// }

/**
 * --------------------------------------------------
 * Get form data
 * @type {HTMLFormElement}
 * --------------------------------------------------
 */

// form
const form = document.forms[0];


/**
 * --------------------------------------------------
 * Events
 * --------------------------------------------------
 */
let timerInterval;
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
    if (minutes === 60) {
        clearInterval(timerInterval);
        alert('Time\'s up. See results.');
    }
}
function resetTimer() {
    // stop interval
    clearInterval(timerInterval);
    // clear accumulator
    seconds = 0;
    minutes = 0;
    // reset interface
    timer.innerText = '00:00';
}

startButton.onclick = function(event) {
    // reset previous values
    form.classList.remove('highlight-answers');
    resetTimer();
    updatePoints('0');
    updateScore('0');
    // start all over
    timerInterval = setInterval(updateTimer, 1000);
    updateMessage('🙇 Good luck!');
}


// submit
form.onsubmit = function(event) {
    event.preventDefault();
    // highlight
    form.classList.add('highlight-answers');
    const formData = new FormData(form);

    // variables
    let actualPoints = 0;
    let actualScore = 0;
    let status = false;
    let message = '';

    // iterate FormData values
    for (const [name, value] of formData) {
        const currentQuestion = document.querySelector(`[name='${name}']`);
        if (currentQuestion.checked && currentQuestion.getAttribute('value') === "1") {
            // correct
            actualPoints += 1;
        } else {
            // not correct
        }
    }

    // compute results
    actualScore = (actualPoints / maxPoints) * 100;
    status = actualScore >= 65;
    message = status === true ? '🥳 You have passed the assessment' : '🐞 Not enough points';

    // update user interface
    resetTimer();
    updatePoints(actualPoints);
    updateScore(actualScore);
    updateMessage(message);
}

// reset
form.onreset = function(event) {
    form.classList.remove('highlight-answers');
    updateMessage('Choose your answers');
    updatePoints('0');
    updateScore('0');
}
