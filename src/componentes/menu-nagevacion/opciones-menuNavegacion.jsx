import React from 'react';
import { motion } from 'framer-motion';
import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';
import CerrarMenuNavegacion from './cerrar-MenuNavegacion';
import CerrarDetallesUnidad from 'componentes/detallesUnidad/cerrar-detallesUnidad';

export const OpcionesMenu = ({ logo, nombreOpcion, id, href }) => {
	// let id = 0;
	return (
		<a
			href={href}
			className={estilosMenuNavegacion.opcionMenu}
			id={id}
			key={id}
			onClick={() => {
				// cerrando el menu de navegacion
				CerrarMenuNavegacion();
				// cerrando detalle de cintillo
				CerrarDetallesUnidad();
			}}
		>
			{/* linea del comienzo */}
			<hr className={estilosMenuNavegacion.lineaComienzo} />
			{/* logo */}
			{logo}
			{/* nombre de opcion */}
			<motion.p animate={{ transitionDelay: id * 0.1 + 's' }}>{nombreOpcion}</motion.p>
			{/* linea final */}
			<hr className={estilosMenuNavegacion.lineaFinal} />
		</a>
	);
};
