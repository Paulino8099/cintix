import React from 'react';
import { motion } from 'framer-motion';
import { TituloSvg } from './TituloSvg';
import { Flor } from './Flor';
import { ImagenFondo } from './ImagenFondo';

export function Cabecera() {

	const variants = {
		visible: {
			position: 'relative',
			width: 'calc(95vw)',
			height: '100vh',
			overflow: 'hidden',

			display: 'grid',
		}
	};

	return (
		<motion.header variants={variants} animate="visible" initial="visible" id="cabecera">
			<TituloSvg />
			<ImagenFondo />
			<Flor />
		</motion.header>
	);
}
