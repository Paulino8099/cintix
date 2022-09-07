import React from 'react';
import estilosSeccion from '../../scss/seccion.module.scss';
import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';
import { motion } from 'framer-motion';

export const Seccion = (props) => {
	return (
		<motion.section
			className={estilosSeccion.seccion}
			id={props.idSeccion}
			whileInView={() => {
				document.querySelector('.' + estilosMenuNavegacion.logo_menuNavegacion).title =
					'Click para ir a inicio.';
			}}
			viewport={{
				once: false
			}}
		>
			{/* titulo */}
			<h1 className={estilosSeccion.titulo_seccion}>
				<b>{props.mitadTitulo1}</b> {props.mitadTitulo2}
			</h1>
			{/* comentario principal */}
			<span to={'/'} className={estilosSeccion.comentarioPrincipal_seccion}>
				<h3>{props.comentarioPrincipal}</h3>
			</span>
			{/* todos las props.unidades */}
			<motion.ul className={estilosSeccion.contenedor_seccion}>
				{props.unidad}
			</motion.ul>
		</motion.section>
	);
};
