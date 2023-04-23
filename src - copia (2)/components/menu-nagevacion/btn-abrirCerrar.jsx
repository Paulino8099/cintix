import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';

export const BtnAbrirCerrar = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			justifySelf: 'flex-end',
			top: 0,
			right: 0,
			margin: '1vh',
			marginLeft: data.btnNavBar ? '2.5vw' : '1vh',
			fontSize: '3vw',
			color: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: 0.3 },
			cursor: 'pointer',

			display: 'grid'
		}
	};

	return (
		<motion.div
			variants={variants}
			animate="visible"
			initial="visible"
			onClick={() => {
				setData({
					...data,
					btnNavBar: !data.btnNavBar,
					backgroundOpacity: !data.backgroundOpacity,
					backgroundOpacityFunction: () => {
						setData({
							...data,
							backgroundOpacity: false,
							btnNavBar: false
						});
					}
				});
			}}
		>
			<AiOutlineMenuUnfold />
		</motion.div>
	);
};