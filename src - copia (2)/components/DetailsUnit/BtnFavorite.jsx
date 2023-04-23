import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import {FaHeart} from 'react-icons/fa';

export const BtnFavorite = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);
	const handleClick = () => {setData({...data, unitFavorite: !data.unitFavorite})};

	const variants = {
		visible: {
			position: 'absolute',
			margin: '2%',
			borderRadius: '50px',
			boxShadow: '0 0 5px #1010',
			color: data.unitFavorite ? 'var(--color-5)' : 'var(--darkMode-1)',
			background: 'var(--color-3)',
			height: '3vw',
			width: '3vw',
			fontSize: '2vw',
			placeItems: 'center',
			transition: { duration: 0.3, type: 'spring' },
			cursor: 'pointer',

			display: 'grid'
		}
	};
	return (
		<motion.span variants={variants} animate="visible" initial="visible" onClick={handleClick}>
			<FaHeart />
		</motion.span>
	);
};
