import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { LogoFlotante } from 'components/LogoFloating/LogoFloating';
import { motion } from 'framer-motion';
import { Title } from './universal/title/Title';
import { Units } from './units/Units';

export const SectionCintix = ({ idSeccion, mitadTitulo1, mitadTitulo2 }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			borderTop: '3px dashed var(--color-3)',
			width: 'calc(95vw - 10px)',
			minHeight: '100vh',
			marginBottom: '5vw',

			display: 'grid'
		}
	};

	return (
		<motion.section variants={variants} animate="visible" initial="visible" id={idSeccion}>
			<Title mitadTitulo1={mitadTitulo1} mitadTitulo2={mitadTitulo2} />
			<Units />
		</motion.section>
	);
};
