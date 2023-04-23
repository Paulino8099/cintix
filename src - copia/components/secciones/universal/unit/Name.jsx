import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';

export const Name = ({ nameUnit }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			color: 'var(--color-4)',
			fontSize: '1rem',
			textAlign: 'center',
			fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
            fontWeight: '800',
			transition: '.3s',
            background: 'var(--color-3)',
            padding: '3px 7px',
            borderRadius: '10px'
		}
	};

	return (
		<motion.p variants={variants} animate="visible" initial="visible">
			{nameUnit}
		</motion.p>
	);
};
