import React, { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const BackgroundOpacity = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'fixed',
			background: '#080808e4',
			width: '100vw',
			height: '100vh',
			transition: { duration: 0.3 },
			opacity: data.backgroundOpacity ? 1 : 0,
			pointerEvents: data.backgroundOpacity ? 'visible' : 'none',
			zIndex: 500,

			display: 'grid'
		}
	};
	return (
		<motion.div
			variants={variants}
			animate="visible"
			initial="visible"
			onClick={data.backgroundOpacityFunction}
		/>
	);
};
