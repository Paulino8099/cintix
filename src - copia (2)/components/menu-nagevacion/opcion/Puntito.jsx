import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Puntito = ({nombreOpcion}) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
        visible: {
            position: "absolute",
            left: 0,
			width: '7px',
			height: '7px',
			marginTop: data.btnNavBar ? '1vw' : '0vw',
			zIndex: '10',
			marginLeft: '3px',
			borderRadius: '50px',
			transition: { duration: 0.5, },
			background: nombreOpcion.toLowerCase() === data.nameSection ? 'var(--color-6)' : 'transparent',

			display: 'grid'
		}
	};
	return <motion.div variants={variants} animate="visible" initial="visible"/>;
};
