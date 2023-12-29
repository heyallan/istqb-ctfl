displayPoints()
displayScore()
displayStatus()

window.addEventListener('click', function(event) {
    if (event.target.matches('[data-action="reset"]')) {
        const target = event.target.getAttribute('data-target');
        reset(target);
    }

    if (event.target.matches('[data-action="print"]')) {
        window.print();
    }

    if (event.target.matches('[data-action="dialog"]')) {
        const target = event.target.getAttribute('data-target');
        const dialog = document.querySelector(`#${target}`);
        dialog.showModal();
    }

    if (event.target.matches('[data-action="dialog-close"]')) {
        const target = event.target.getAttribute('data-target');
        const dialog = document.querySelector(`#${target}`);
        dialog.close();
    }
})
