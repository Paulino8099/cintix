import { useState } from 'react';
import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';

export default function CerrarMenuNavegacion() {
	// abriendo y/o cerrando menu al dar click en btn abrir/cerrar
	let interruptor = document.querySelector('.' + estilosMenuNavegacion.menu_navegacion);

	interruptor.classList.remove(estilosMenuNavegacion.activar_menuNavegacion);
}
