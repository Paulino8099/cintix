import React, { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Nombre = ({ id, nombreOpcion }) => {
    const { data, setData } = useContext(DataContext);
    
	const variants = {
		visible: {
			position: 'absolute',
			right: '2vw',
			fontSize: '2.2vw',
			transform: data.btnNavBar ? 'scale(1)' : 'scale(0)',
			fontWeight: 800,
			transition: { duration: .5, type: 'spring' },
			alignSelf: 'center',
		}
	};
	return (
		<motion.h3 variants={variants} animate="visible" initial="visible">
			{nombreOpcion}
		</motion.h3>
	);
};
