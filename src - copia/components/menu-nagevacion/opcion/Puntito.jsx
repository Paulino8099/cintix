import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Puntito = ({nombreOpcion}) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
        visible: {
            position: "absolute",
			width: '7px',
			height: '7px',
			// alignSelf: data.btnNavBar ? 'center' : 'start',
			zIndex: '10',
			// margin: data.btnNavBar ? '50% 3px' : '0 3px',
			borderRadius: '50px',
			transition: { duration: 0.5, },
			background: nombreOpcion.toLowerCase() === data.nameSection ? 'var(--color-6)' : 'transparent',

			display: 'grid'
		}
	};
	return <motion.div variants={variants} animate="visible" initial="visible"/>;
};
