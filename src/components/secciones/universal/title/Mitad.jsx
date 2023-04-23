import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Mitad = ({ mitad }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			color: 'var(--color-3)',
			transition: { duration: 0.3 }
		}
	};

	return (
		<motion.b variants={variants} animate="visible" initial="visible">
			{mitad}
		</motion.b>
	);
};
