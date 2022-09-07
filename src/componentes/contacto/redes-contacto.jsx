import React from 'react';
import { motion } from 'framer-motion';

export const Redes = ({ id, href, className, logo, subtitulo }) => {
	return (
		<motion.a
			className={className}
			id={id}
			key={id}
			title={id === 4 || id === 5 ? `Llamar a Cintix` : `Ir al ${subtitulo} de Cintix`}
			href={null || '' ? `#${id}` : href}
			target="_blank"
			alt={subtitulo}
			initial={{
				opacity: 0
			}}
			transition={{
				delay: id * 0.08
			}}
			whileInView={{
				opacity: 1
			}}
			viewport={{
				once: true
			}}
		>
			{logo}
			<p>{subtitulo}</p>
		</motion.a>
	);
};
