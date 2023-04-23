//estilos
import estilosMenuNavegacion from '../../scss/menu-navegacion/menu-navegacion.module.scss';

// funciones
import { AgrandarBtnModoOscuro } from './darkMode/BtnDarkMode';

export default function AbrirMenuNavegacion() {
	let interruptor = document.querySelector('.' + estilosMenuNavegacion.menu_navegacion);

	interruptor.classList.add(estilosMenuNavegacion.activar_menuNavegacion);

	AgrandarBtnModoOscuro();
}
