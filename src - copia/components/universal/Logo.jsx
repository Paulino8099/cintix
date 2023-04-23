import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ click, href }) => {
	const variants = {
		visible: {
			background: 'var(--color-1)',
			'box-shadow': 'inset 0 0 5px var(--color-4)',
			width: '5vw',
			height: '5vw',
			'border-radius': '50%',
			'place-items': 'center',
			cursor: 'pointer',
			transition: '.3s',

			display: 'grid'
		},
		img: {
			width: '100%',
			height: '100%',
			'pointer-events': 'none',
			transition: '.3s'
		}
	};

	return (
		<motion.img 
			variants={variants}
			initial="visible"
			onClick={click}
			title="¡Diseña tu cintillo perfecto con nosotros!"
			href={href}
			src="./img/svg/logo-cintix.svg"
			alt=""
		/>
	);
};
