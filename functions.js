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
    if (!formId) { console.log('No form on this page'); return; }
    const answers = JSON.parse(localStorage.getItem(formId));
    console.log('answers', answers);
    if (!answers) { console.log('No answers associated with this form'); return; }
    for (const answer of answers) {
        document.querySelector(`[name="${answer[0]}"]`).checked = true;
    }
}


const timer = document.querySelector('.timer');
let timerInterval;
let seconds = 0;
let minutes = 0;
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
        alert(messageTimesUp);
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

function reset(id) {
    setPoints(id, 0);
        displayPoints();
    setScore(id, 0);
        displayScore();
    setStatus(id, 'ready');
        displayStatus();
    localStorage.removeItem(id);
}
