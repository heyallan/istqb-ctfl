function setPoints(target, value) {
    localStorage.setItem(`${target}-points`, value);
}

function displayPoints() {
    document.querySelectorAll('[data-action="get-points"]').forEach(function(item) {
        const source = item.getAttribute('data-from');
        const points = localStorage.getItem(`${source}-points`);
        item.innerText = points || 0;
    });
}


function setScore(target, value) {
    localStorage.setItem(`${target}-score`, value);
}

function displayScore() {
    document.querySelectorAll('[data-action="get-score"]').forEach(function(item) {
        const source = item.getAttribute('data-from');
        const points = localStorage.getItem(`${source}-score`);
        item.innerText = points || 0;
    });
}

function getStatus(id) {
    return localStorage.getItem(`${id}-status`) || 'Pending';
}

function setStatus(id, value) {
    return localStorage.setItem(`${id}-status`, value);
}

function displayStatus() {
    document.querySelectorAll('[data-action="get-status"]').forEach(function(item) {
        const source = item.getAttribute('data-from');
        let message = '';
        const status = getStatus(source);
        switch (status) {
            case 'in-progress':
                message = '📝 In progress';
                break;
            case 'fail':
                message = '❌ Fail';
                break;
            case 'pass':
                message = '✅ Pass';
                break;
            default:
                message = 'Pending';
        }
        item.innerText = message;
    });
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
    setStatus(id, 'pending');
        displayStatus();
}
