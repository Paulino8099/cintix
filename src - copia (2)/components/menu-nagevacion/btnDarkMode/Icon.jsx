import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Icon = ({ icon, scale }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			placeItems: 'center',
			placeSelf: 'center',
			color: 'var(--color-3)',
			fontSize: '1.8vw',
			transform: scale,
			transition: { duration: 0.5, type: 'spring' },

			display: 'grid'
		}
	};

	// cambiando el color para poner todo en modo noche
	return (
		<motion.div variants={variants} animate="visible" initial="visible">
			{icon}
		</motion.div>
	);
};
