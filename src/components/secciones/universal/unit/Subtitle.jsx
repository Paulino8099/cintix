import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';

export const Subtitle = ({ text }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			color: 'var(--darkMode-1)',
			fontSize: '1.5vw',
			textAlign: 'center',
			fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
            fontWeight: '800',
			transition: '.3s',
            background: 'var(--color-3)',
            padding: '1px 7px',
            borderRadius: '10px'
		}
	};

	return (
		<motion.p variants={variants} animate="visible" initial="visible">
			{text}
		</motion.p>
	);
};
