import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const ImagenFondo = ({ nombreOpcion }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
        visible: {
            position: 'absolute',
            top: 0,
            left: 0,
			width: '95vw',
			height: '100vh',
			marginLeft: '-2px',
			filter: 'drop-shadow(0 0 5px var(--color-4))',
			objectFit: 'cover',
			pointerEvents: 'none',

			display: 'grid'
		}
	};
	return <motion.img variants={variants} animate="visible" initial="visible" src="./img/svg/fondo-cabecera.svg" alt="" />;
};
