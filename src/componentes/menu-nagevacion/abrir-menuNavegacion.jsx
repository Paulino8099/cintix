import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';

export default function AbrirMenuNavegacion() {
	// abriendo y/o cerrando menu al dar click en btn abrir/cerrar
	let interruptor = document.querySelector('.' + estilosMenuNavegacion.menu_navegacion);

	interruptor.classList.add(estilosMenuNavegacion.activar_menuNavegacion);
}
