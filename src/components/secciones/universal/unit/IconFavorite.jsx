import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export const IconFavorite = ({id}) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
            position: 'absolute',
            margin: '2px',
			boxShadow: '0 0 5px #1010',
			color: 'var(--color-5)',
			height: '2.1vw',
			width: '2.1vw',
			fontSize: '1.8vw',
            justifySelf: 'flex-start',
			placeItems: 'center',
			transition: { duration: 0.3, type: 'spring' },
            cursor: 'pointer',
            pointerEvents: 'none',

			transform: data.listUnitsFavorites.includes(id) ? 'scale(1)' : 'scale(0)',

			display: 'grid'
		},
		tap: {
			transform: 'scale(.9)'
		}
	};

	return (
		<motion.span variants={variants} animate="visible" initial="visible">
			<FaHeart />
		</motion.span>
	);
};
