import { useEffect } from 'react';
import { useState } from 'react';

export function ModoOscuro() {
	if (window.localStorage.getItem('modo-oscuro') === null) {
		window.localStorage.setItem('modo-oscuro', 'desactivado');
	}

	// const [ Local, localE ] = useState(window.localStorage.getItem('modo-oscuro'));

	if (localStorage.getItem('modo-oscuro') === 'desactivado') {
		document.documentElement.style.setProperty('--color-1', '#333333');
		document.documentElement.style.setProperty('--color-4', '#d5d0d0');
		document.documentElement.style.setProperty('--color-7', '#d5d0d0');

		window.localStorage.setItem('modo-oscuro', 'activado');
	} else if (localStorage.getItem('modo-oscuro') === 'activado') {
		document.documentElement.style.setProperty('--color-1', '#f2f5ff');
		document.documentElement.style.setProperty('--color-4', '#252323');
		document.documentElement.style.setProperty('--color-7', '#f2f5ff');

		window.localStorage.setItem('modo-oscuro', 'desactivado');
	}
}
