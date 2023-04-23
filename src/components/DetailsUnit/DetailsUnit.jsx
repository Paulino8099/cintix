import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { BtnClose } from './BtnClose';
import { Title } from './Title';
import { Img } from './Img';
import { Cost } from './Cost';
import { Buy } from './Buy';
import { BtnFavorite } from '../universal/BtnFavorite';

export const DetailsUnit = () => {
    const { data, setData }= useContext(DataContext);

	const variants = {
		visible: {
			position: 'fixed',
			top: '20vh',
			left: '32.5vw',
			borderRadius: '10px',
			boxShadow: '0 0 5px #1010',
			background: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			height: '30vw',
			width: '30vw',
			transition: { duration: 0.3, type: 'spring' },
			transform: data.modalDetailsUnitToggle ? 'scale(1)' : 'scale(0)',
            zIndex: 600,

			display: 'grid'
		}
	};
	return (
        <motion.div variants={variants} animate="visible" initial="visible">
            <BtnFavorite />
			<Title />
			<BtnClose />
			<Img />
            <Cost />
            <Buy />
		</motion.div>
	);
};
