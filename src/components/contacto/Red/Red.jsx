import React from 'react';
import { motion } from 'framer-motion';
import { SubTitle } from './SubTitle';

export const Red = ({ id, href, logo, subTitle, color }) => {
	const variants = {
		visible: {
			color: color,
			boxShadow: `inset 0 0 10px ${color}`,
			background: `linear-gradient(90deg, ${color} 0%, ${color} 2%, transparent 2%, transparent 100%)`,
			height: 'min-content',
			borderRadius: '4px',
			textDecoration: 'none',
			alignItems: 'center',
			margin: '1vw',
			fontSize: '1.5vw',
			padding: '0.5vw',
			paddingLeft: '1vw',
			transition: { duration: 0.03 },

			display: 'flex'
		}
	};

	return (
		<motion.a
			variants={variants}
			animate="visible"
			initial={{
				opacity: 0
			}}
			id={id}
			key={id}
			title={id === 4 || id === 5 ? `Llamar a Cintix` : `Ir al ${subTitle} de Cintix`}
			href={null || '' ? `#${id}` : href}
			target="_blank"
			alt={subTitle}
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
			<SubTitle text={subTitle} />
		</motion.a>
	);
};
