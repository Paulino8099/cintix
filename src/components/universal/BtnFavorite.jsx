import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export const BtnFavorite = ({ id, scale = 1 }) => {
	const { data, setData } = useContext(DataContext);
	const indexList = data.listUnitsFavorites.indexOf(data.idUnit)

	console.log(indexList)

	const handleClick = () => {
		if (data.listUnitsFavorites.includes(data.idUnit)) {
			// window.localStorage.setItem('listUnitsFavorites', JSON.stringify(store))
			data.listUnitsFavorites.splice(indexList, 1);
		} else {
			data.listUnitsFavorites.push(data.idUnit);
		}

		// list.includes(data.idUnit)  ?? list.splice(data.idUnit)

		setData({
			...data,
			listUnitsFavorites: data.listUnitsFavorites
		});
	};

	const variants = {
		visible: {
			position: 'absolute',
			margin: '2%',
			borderRadius: '50px',
			boxShadow: '0 0 5px #1010',
			color: data.listUnitsFavorites.includes(data.idUnit) ? 'var(--color-5)' : 'var(--darkMode-1)',
			background: 'var(--color-3)',
			height: '3vw',
			width: '3vw',
			fontSize: '2vw',
			placeItems: 'center',
			transform: `scale(${scale})`,
			transition: { duration: 0.3, type: 'spring' },
			cursor: 'pointer',
			transform: 'scale(1)',

			display: 'grid'
		},
		tap: {
			transform: 'scale(.9)'
		}
	};
	return (
		<motion.span variants={variants} animate="visible" whileTap="tap" initial="visible" onClick={handleClick}>
			<FaHeart />
		</motion.span>
	);
};
