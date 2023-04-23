import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Title } from 'components/secciones/universal/title/Title';
import { Redes } from './Redes';

export const Contacto = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			width: 'calc(95vw - 10px)',
			borderTop: '3px dashed var(--color-3)',
			minHeight: '50vh',
			transition: { duration: 0.03 },

			display: 'grid'
		}
	};
	return (
		<motion.div
			variants={variants}
			animate="visible"
			initial="visible"
			id="contacto"
		>
			<Title id="contacto" mitadTitulo1="Cont" mitadTitulo2="acto" />
			<Redes />
		</motion.div>
	);
};
