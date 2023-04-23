//estilos
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const IconoFavoritoPrincipal = (props) => {
	const variants = {
		visible: {
			position: 'absolute',
			background: 'var(--color-5)',
			width: '1.5vw',
			height: '1.5vw',
			boxShadow: '0 0 5px #25232340',
			placeItems: 'center',
			color: 'var(--color-1)',
			borderRadius: '5px',
			fontSize: '1rem',
			top: 0,
			right: 0,
			cursor: 'pointer',
			transition: { duration: 0.03 },
			transform: 'scale(0)',

			display: 'grid'
		}
	};

	return (
		//  icono para saber si la unidad esta agregada a favorito.
		<motion.span
			variants={variants}
			animate="visible"
			initial="visible"
			id={props.id}
			title="Añadido a favorito."
			// onClick={() => {}}
			// transition={{
			// 	delay: props.id * 0.05
			// }}
			// initial={{
			// 	scale: 0.3
			// }}
			// whileInView={{
			// 	opacity: 1,
			// 	scale: 1
			// }}
			// viewport={{ once: false }}
		>
			<BsBookmarkHeartFill
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
	);
};
