import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Title } from '../universal/title/Title';
import { Units } from './units/Units';

export const Section = ({ idSeccion, children}) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			borderTop: '3px dashed var(--color-3)',
			width: 'calc(95vw - 10px)',
			minHeight: '100vh',
			marginBottom: '5vw',
			transition: { duration: 0.03 },

			display: 'grid'
		}
	};

	return (
		<motion.section variants={variants} animate="visible" initial="visible" id={idSeccion}>
			{children}
		</motion.section>
	);
};
