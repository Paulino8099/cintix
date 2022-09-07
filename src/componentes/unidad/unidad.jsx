import React from 'react';
import estilosSeccion from '../../scss/seccion.module.scss';
import AbrirDetallesUnidad from '../detallesUnidad/abrir-detallesUnidad';
import CerrarMenuNavegacion from 'componentes/menu-nagevacion/cerrar-MenuNavegacion';
import { motion } from 'framer-motion';
import { BsImages } from 'react-icons/bs';
import { useState } from 'react';

export const Unidad = (props) => {
	const [ datos ] = useState({
		subtituloUnidad: props.subtitulo,
		ultimaLetra: props.detalles.color.substr(-1),
		nombreColor: props.detalles.color,
		eliminarUltimaLetra: props.detalles.color.slice(0, props.detalles.color.length - 1)
	});
	window.localStorage.setItem(`detalles`, JSON.stringify(props.detalles));
	let cambioUltimaLetra = datos.nombreColor;

	if (datos.ultimaLetra === 'o' && datos.subtituloUnidad === 'Venda') {
		cambioUltimaLetra = datos.eliminarUltimaLetra + 'a';
	}

	if (datos.nombreColor === 'Rojo-Vino') cambioUltimaLetra = datos.nombreColor;

	return (
		<li
			id={props.id}
			key={props.id + '. ' + props.subtitulo + ' color'}
			name={props.detalles}
			title={props.subtitulo + ' ' + props.detalles.color}
		>
			{/* boton */} {/* para abrir mas detalles de la unidad al dar click*/}
			<motion.span
				className={estilosSeccion.btnAbrir_detallesUnidad}
				id={props.id}
				onClick={() => {
					AbrirDetallesUnidad();
					CerrarMenuNavegacion();
					window.localStorage.setItem(`detalles`, JSON.stringify(props.detalles));
				}}
				transition={{
					delay: props.id * 0.05
				}}
				initial={{
					scale: 0.3
				}}
				whileInView={{
					opacity: 1,
					scale: 1
				}}
				viewport={{ once: false }}
			>
				{/* boton para abrir detalle de cintillo */}
				<BsImages
					title="Abrir detalles de este cintillo."
					transition={{
						delay: props.id * 0.1
					}}
					initial={{
						scale: 0
					}}
					whileInView={{
						opacity: 1,
						scale: 1
					}}
					viewport={{ once: true }}
				/>
			</motion.span>
			{/* imagen */}
			<img src={props.imgUnidad} alt="" />
			{/* subtitulo */}
			<p>{`${props.subtitulo} ${cambioUltimaLetra}`}</p>
		</li>
	);
};
