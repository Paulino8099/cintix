import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';

export const Title = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
            position: 'absolute',
            top: '5px',
            justifySelf: 'center', 
			borderRadius: '50px',
			color: data.darkMode ? 'var(--darkMode-1)' : 'var(--darkMode-2)',
			fontSize: '2vw',
			fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
			transition: { duration: 0.3, type: 'spring' },
		}
	};
	return (
        <motion.h3 variants={variants} animate="visible" initial="visible">
            {data.nameUnit}
		</motion.h3>
	);
};
