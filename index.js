/**
 * ----------------
 * navbar && dialog
 * ----------------
 */
class navbar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		// else
		this.innerHTML = `
<div class="no-print border-bottom-1 bg-white box-shadow">
	<div class="container">
		<nav class="margin-0 padding-y-1">
			<ul class="margin-0 list-unstyled list-inline">
				<li>
					<a class="color-inherit" href="/istqb-ctfl/">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
						Home
					</a>
				</li>
				<li>
					<a class="color-inherit" href="../">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><polyline points="14 9 9 4 4 9" /><path d="M20 20h-7a4 4 0 0 1-4-4V4" /></svg>
						Back
					</a>
				</li>
				<li>
					<a class="color-inherit" href="/istqb-ctfl/glossary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
						Glossary
					</a>
				</li>
				<li>
					<button class="btn-text" data-action="dialog" data-target="help">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
						Help
					</button>
				</li>
			</ul>
		</nav>
	</div>
</div>
<dialog id="help" style="max-width: 500px;" class="border-radius-0.3">
	<div class="display-flex gap-1">
		<div class="width-min">
			<img class="border-radius-round" src="/istqb-ctfl/img/tutor.png" alt="Tutor smiling" width="60">
		</div>
		<div class="width-max">
			<p class="font-weight-700 margin-bottom-0.5">Heed help?</p>
			<p>Si tienes dudas, preguntas, o sugerencias, escríbeme a allanmoreno@mail.com</p>
			<button class="btn-small" autofocus data-action="dialog-close">OK</button>
		</div>
	</div>
</dialog>
		`;
	}
}
customElements.define('ui-navbar', navbar);




/**
 * ----------------
 * tools bar
 * ----------------
 */
class tools extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		// else
		this.innerHTML = `
<nav class="navbar bg-white border-bottom-1 color-muted padding-y-0.5 box-shadow">
	<div class="container no-print">
		<ul class="list-inline margin-0">
			<li>
				<a class="color-inherit" href="../">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 8 8 12 12 16" /><line x1="16" x2="8" y1="12" y2="12" /></svg>
					Back
				</a>
			</li>
			<li>
				<button class="btn-text" type="button" data-action="dialog" data-target="tips">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" /></svg>
					Tips
				</button>
				<dialog id="tips">
					<p class="font-weight-700">Here are some study tips</p>
					<ul>
						<li>All section titles have anchor links</li>
						<li>Link back to any section by clicking the title then copy and share the URL</li>
						<li>All sections have learning objectives under each subtitle</li>
						<li>Now you can share your favorite testing principles with your colleagues</li>
						<li>Optimized for print</li>
						<li>Printable version is 60% shorter than the original without affecting content</li>
						<li>If you use MicroSoft Edge browser you get high quality 'Read Aloud' for free</li>
					</ul>
					<button class="btn-small" autofocus data-action="dialog-close" data-target="tips">OK</button>
				</dialog>
			</li>
			<li>
				<button class="btn-text" type="button" data-action="print">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect height="8" width="12" x="6" y="14" /></svg>
					Print
				</button>
			</li>
		</ul>
	</div>
</nav>
`;
	}
}
customElements.define('ui-tools', tools);


/**
 * ----------------
 * update ui
* ----------------
 */
displayPoints();
displayScore();
displayStatus();




/**
 * ----------------
 * event handler click
 * ----------------
 */
window.addEventListener('click', function(event) {
	const resetButton = event.target.closest('[data-action="reset"]');
	if (resetButton) {
		const target = resetButton.getAttribute('data-target');
		reset(target);
	}

	const printButton = event.target.closest('[data-action="print"]');
	if (printButton) {
		window.print();
	}

	// this snippet handles all dialogs
	const openDialogButton = event.target.closest('[data-action="dialog"]');
	if (openDialogButton) {
		const dialogSelector = openDialogButton.getAttribute('data-target');
		const dialogComponent = document.querySelector(`#${dialogSelector}`);
		dialogComponent.showModal();
	}
	const closeDialogButton = event.target.closest('[data-action="dialog-close"]');
	if (closeDialogButton) {
		const dialogSelector = closeDialogButton.getAttribute('data-target') || event.target.closest('dialog').id;
		const dialogComponent = document.querySelector(`#${dialogSelector}`);
		dialogComponent.close();
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






// pesky stats
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
