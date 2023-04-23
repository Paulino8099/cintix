import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { BtnClose } from './BtnClose';
import { Title } from './Title';

export const Img = ({ id, icono }) => {
	const { data, setData } = useContext(DataContext);
	const handleClick = () => {};

	const variants = {
		visible: {
            position: 'absolute',
            placeSelf: 'center',
			borderRadius: '50%',
			boxShadow: '0 0 5px #1010',
			background: 'var(--color-3)',
			height: '15vw',
            width: '15vw',
            // objectFit: 'cover',
			transition: { duration: 0.3, type: 'spring' },

			display: 'grid'
		}
	};
	return (
        <motion.img variants={variants} animate="visible" initial="visible" src='/img/svg/flor.svg'>
		</motion.img>
	);
};
