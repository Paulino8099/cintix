import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';

export const BtnClose = () => {
	const { data, setData }= useContext(DataContext);

	function handleClick() {
		setData({
			...data,
			modalDetailsUnitToggle: false,
			backgroundOpacity: false
		});
	}

	const variants = {
		visible: {
			position: 'absolute',
			top: 0,
			right: 0,
			margin: '2%',
			borderRadius: '50px',
			placeItems: 'center',
			color: 'var(--color-6)',
			fontSize: '2.2vw',
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
			<FaWindowClose />
		</motion.span>
	);
};
