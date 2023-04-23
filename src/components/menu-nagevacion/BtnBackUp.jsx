import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { motion } from 'framer-motion';

export const BtnBackUp = () => {
	const { data, setData }= useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			fontSize: '2.8vw',
			width: '3vw',
			height: '3vw',
			bottom: '12.5vh',
			borderRadius: '50px',
			cursor: 'pointer',
			justifySelf: 'center',
			placeItems: 'center',
			background: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			opacity: data.nameSection === '' ? 0 : 1,
			transition: { duration: 0.3, type: 'spring' },
			overflow: 'hidden',
			transform: data.nameSection === '' ? 'scale(0)' : 'scale(1)',
			color: 'var(--color-3)',

			display: 'grid'
		},
		tap: {
			transform: 'scale(.9)'
		}
	};

	return (
		<motion.a variants={variants} animate="visible" initial="visible" whileTap="tap" href="#">
			<AiOutlineArrowUp />
		</motion.a>
	);
};
