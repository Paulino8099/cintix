export function ModoOscuro() {
	if (localStorage.getItem('modo-oscuro') === null) {
		localStorage.setItem('modo-oscuro', false);
	}

	if (localStorage.getItem('modo-oscuro') === false) {
		document.documentElement.style.setProperty('--color-1', '#333333');
		document.documentElement.style.setProperty('--color-4', '#d5d0d0');
		document.documentElement.style.setProperty('--color-7', '#d5d0d0');

		localStorage.setItem('modo-oscuro', true);
	} else if (localStorage.getItem('modo-oscuro') === true) {
		document.documentElement.style.setProperty('--color-1', '#f2f5ff');
		document.documentElement.style.setProperty('--color-4', '#252323');
		document.documentElement.style.setProperty('--color-7', '#f2f5ff');

		localStorage.setItem('modo-oscuro', false);
	}
}
