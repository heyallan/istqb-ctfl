displayPoints();
displayScore();
displayStatus();

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
});

/**
 * ----------------
 * search
 * ----------------
 */
(() => {
	const searchInput = document.querySelector('#search-value');
	if (searchInput === null) return;
	searchInput.addEventListener('input', function(event) {
		const searchValue = searchInput.value.trim().toLowerCase();
		console.log(searchValue);
		const list = document.querySelectorAll('#dictionary dt');
		list.forEach(function(item) {
			const term = item.innerText.toLowerCase();
			const description = item.nextElementSibling.innerText.toLowerCase();
			if (term.includes(searchValue)) {
				item.style.display = ''; // term
				item.nextElementSibling.style.display = ''; // description
			} else {
				item.style.display = 'none';
				item.nextElementSibling.style.display = 'none';
			}
		});
	});
})();


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
		<div id="needhelp" class="popup box-shadow border-radius-0.5">
			<div class="flex gap-1">
				<div class="width-min">
					<img class="border-radius-round"
						 src="/istqb-ctfl/img/tutor.png"
						 alt="Tutor smiling" width="60">
				</div>
				<div class="width-max font-size-small">
					<p><strong>Need help?</strong></p>
					<p>Si tienes dudas, preguntas, o sugerencias, escríbeme a: allanmoreno@mail.com</p>
					<!--<p>Estudiar solo es difícil.</p>-->
					<!--<p>Únete a un grupo de estudio y recibe ayuda de un tutor.</p>-->
					<!--<p>Aprende fundamentos, automatización, y desarrollo web.</p>-->
					<!--<a class="font-size-small text-uppercase" href="#!">Más Info Aquí</a>-->
					<button class="btn-small text-uppercase" data-action="close" data-target="#needhelp" type="button">Cerrar</button>
				</div>
			</div>
		</div>
		`;
		const closeButton = this.querySelector('[data-action="close"]');
		closeButton.closest('button').addEventListener('click', function(event) {
		    sessionStorage.setItem('needhelp', 'dismiss')
		    document.querySelector('#needhelp').style.display = 'none';
		});
	}
}

customElements.define('ui-popup', PopUp);
setTimeout(() => {
    if (sessionStorage.getItem('needhelp') === 'dismiss') return;
	const popup = document.createElement('ui-popup');
	document.body.insertAdjacentElement('beforeEnd', popup);
}, 5000);


((document) => {
	var varScript = undefined;
	var scriptContent = '';
	varScript = document.createElement('script');
	varScript.type = 'text/javascript';
	scriptContent = document.createTextNode(`var sc_project=12954337; var sc_invisible=1; var sc_security="4c7965b8";`);
	varScript.appendChild(scriptContent);
	document.getElementsByTagName('head')[0].appendChild(varScript);
	// - - - - - - - - - - - - -
	var remoteScript = undefined;
	remoteScript = document.createElement('script');
	remoteScript.type = 'text/javascript';
	remoteScript.async = true;
	remoteScript.onload = function() { /* remote script has loaded */ };
	remoteScript.src = 'https://www.statcounter.com/counter/counter.js';
	document.getElementsByTagName('head')[0].appendChild(remoteScript);
})(document);