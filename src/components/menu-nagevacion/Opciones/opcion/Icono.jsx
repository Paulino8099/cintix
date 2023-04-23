import React, { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Icono = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			left: data.btnNavBar ? '2vw' : '1vw',
			fontSize: '2vw',
			transition: { duration: 0.3 },
			placeItems: 'center',
			alignSelf: 'center',

			display: 'grid'
		}
	};
	return (
		<motion.span variants={variants} animate="visible" initial="visible">
			{icono}
		</motion.span>
	);
};
