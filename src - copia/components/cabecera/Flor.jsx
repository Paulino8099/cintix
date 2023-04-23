import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Flor = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			filter: 'drop-shadow(0 0 5px var(--color-4))',
			width: '20vw'
		}
	};

	return (
		<motion.img
			variants={variants}
			animate="visible" initial="visible"
			viewport={{
				once: false
			}}
			onViewportEnter={() => {
				setData({ ...data, nameSection: '' });
			}}
			src="./img/svg/flor.svg"
		/>
	);
};
