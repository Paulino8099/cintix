import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const RedSocial = ({ id, icono, href, nombre, opacity = 1 }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			fontSize: '3.5vw',
			transition: '.3s',
			placeItems: 'center',
			textDecoration: 'none',
			color: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: .3 },
			cursor: 'pointer',
			opacity: opacity,

			display: 'grid'
		}
	};

	return (
		<motion.a
			variants={variants}
			animate="visible"
			initial="visible"
			id={id}
			key={id}
			title={`Ir al ${nombre} de Cintix.`}
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{icono}
		</motion.a>
	);
};
