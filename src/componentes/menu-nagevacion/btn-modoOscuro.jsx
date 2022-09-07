import React from 'react';
import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';
import { ModoOscuro } from './modoOscuro';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

export const BtnModoOscurso = () => {
	const [ local, localE ] = useState(() => {
		if (window.localStorage.getItem('modo-oscuro') === 'desactivado') {
			return true;
		}
	});

	// cambiando el color para poner todo en modo noche
	return (
		<span
			className={
				local ? (
					estilosMenuNavegacion.btnModoOscuro
				) : (
					estilosMenuNavegacion.btnModoOscuro + ' ' + estilosMenuNavegacion.activar_btnModoOscuro
				)
			}
			onClick={() => {
				ModoOscuro();

				localE((current) => !current);
			}}
			title={local ? 'Activar el modo oscuro.' : 'Desactivar el modo oscuro.'}
		>
			{/* luna */}
			{<FaMoon className={estilosMenuNavegacion.iconoLuna} />}
			{/* sol */}
			{<FaSun className={estilosMenuNavegacion.iconoSol} />}
			<i className={estilosMenuNavegacion.interruptor_modoOscuro} />
		</span>
	);
};
