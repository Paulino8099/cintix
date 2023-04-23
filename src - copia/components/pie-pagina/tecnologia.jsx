import React from 'react';
import { motion } from 'framer-motion';

export const Tecnologia = ({ id, href, className, logo, subtitulo }) => {
	return (
		<motion.a
			className={className}
			id={id}
			key={id}
			title={`Ir al propio sitio web de ${subtitulo}.`}
			href={href}
			alt={subtitulo}
			initial={{
				opacity: 0
			}}
			transition={{
				delay: id * 0.16
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
