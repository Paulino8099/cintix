import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';

export const BtnClose = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			top: 0,
			right: 0,
			margin: '2%',
			borderRadius: '50px',
			placeItems: 'center',
			color: 'var(--color-6)',
			height: '2vw',
			width: '2vw',
			fontSize: '2vw',
			transition: { duration: 0.3, type: 'spring' },
			cursor: 'pointer',

			display: 'grid'
		}
	};
	return (
		<motion.span
			variants={variants}
			animate="visible"
			initial="visible"
			onClick={() => {
				setData({
					...data,
					modalDetailsUnitToggle: false,
					backgroundOpacity: false,
				});
			}}
		>
			<FaWindowClose />
		</motion.span>
	);
};
