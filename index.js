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

/**
 * --------------
 * web components
 * --------------
 */

class PopUp extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="popup box-shadow border-radius-0.5">
            <div class="flex gap-1">
                <div class="width-min">
                    <img class="border-radius-round"
                         src="/istqb-ctfl/img/tutor.png"
                         alt="Tutor smiling" width="60">
                </div>
                <div class="width-max font-size-small">
                    <p>Estudiar solo es difícil.</p>
                    <p>Únete a un grupo de estudio y recibe ayuda de un tutor.</p>
                    <p>Aprende fundamentos, automatización, y desarrollo web.</p>
                    <a class="font-size-small text-uppercase" href="#!">Más Info Aquí</a>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('ui-popup', PopUp);

// inject popup manually for better control
if (window.location.href.includes('assessment')) {
    // document.body.innerHTML += `<ui-popup></ui-popup>`;
}