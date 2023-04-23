import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Buy = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			right: 0,
			bottom: 0,
			margin: '2%',
			// justifyContent: 'space-between',
			color: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			textAlign: 'center',
			textJustify: 'center',
			borderRadius: '5px',
			background: 'var(--color-3)',
			fontSize: '2vw',
			cursor: 'pointer',
			padding: '0 10px',
			fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
			transition: { duration: 0.3, type: 'spring' },
			transform: 'scale(1)'
		},
		tap: {
			transform: 'scale(.9)'
		}
	};
	return (
		<motion.h3 variants={variants} animate="visible" whileTap="tap" initial="visible">
			Comprar
		</motion.h3>
	);
};
