displayPoints()
displayScore()
displayStatus()

window.addEventListener('click', function(event) {
    if (event.target.matches('[data-action="reset"]')) {
        const target = event.target.getAttribute('data-target');
        reset(target);
    }
})
