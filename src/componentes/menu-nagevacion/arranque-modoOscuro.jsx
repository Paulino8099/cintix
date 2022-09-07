import { useState } from 'react';

// activar modo oscuro al momento de entrar a la pagina.
export function ArranqueModoOscuro() {
	const [ local ] = useState(window.localStorage.getItem('modo-oscuro'));

	if (local === 'activado') {
		document.documentElement.style.setProperty('--color-1', '#333333');
		document.documentElement.style.setProperty('--color-4', '#d5d0d0');
		document.documentElement.style.setProperty('--color-7', '#d5d0d0');
	}
}
