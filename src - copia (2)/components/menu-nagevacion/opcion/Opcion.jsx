import React, { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Puntito } from './Puntito';
import { Icono } from './Icono';
import { Nombre } from './Nombre';

export const Opcion = ({ enlace, nombreOpcion, id, icono }) => {
	const { data, setData } = useContext(DataContext);

	const handleClick = () => {
		setData({ ...data, nameSection: nombreOpcion.toLowerCase() });
	};

	const variants = {
		visible: {
			position: 'relative',
			color:
				nombreOpcion.toLowerCase() === data.nameSection
					? 'var(--color-6)'
					: 'var(--color-3)',
			width: '80%',
			height: '6vh',
			borderRadius: '5px',
			background: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: 0.3 },
			justifySelf: 'center',
			textDecoration: 'none',
			overflow: 'hidden',
			borderBottom:
				nombreOpcion.toLowerCase() === data.nameSection
					? '3px solid var(--color-6)'
					: '3px solid transparent',
			borderTop: '3px solid transparent',

			display: 'grid'
		}
	};
	return (
		<motion.a variants={variants} animate="visible" initial="visible" href={enlace} key={id}>
			<Puntito nombreOpcion={nombreOpcion} />
			<Icono icono={icono} />
			<Nombre nombreOpcion={nombreOpcion} id={id} />
		</motion.a>
	);
};
