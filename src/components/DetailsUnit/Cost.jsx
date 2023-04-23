import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const Cost = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			bottom: 0,
			margin: '2%',
			padding: '0 3px',
			borderRadius: '5px',
			background: 'var(--color-3)',
			fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
			fontSize: '2vw',
			color: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: 0.3, type: 'spring' }
		},
		selector: {
			background: '#1458',
			color: '#5058',
		}
	};
	return (
		<motion.h3
			variants={variants}
			animate="visible"
			initial="visible"
			onSelect="selector"
			src="/img/svg/flor.svg"
		>
			{data.costUnit}
		</motion.h3>
	);
};
