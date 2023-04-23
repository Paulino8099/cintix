import React from 'react';
import { motion } from 'framer-motion';

export const SubTitle = ({ text }) => {
	const variants = {
		visible: {
			marginLeft: '1vw',
			transition: { duration: 0.03 },
			fontSize: '1.5vw',
		}
	};

	return (
		<motion.h3 variants={variants} animate="visible" initial="visible">
			{text}
		</motion.h3>
	);
};
