import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';

export const LogoPage = ({ className, click, href }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			borderRadius: '50px',
			width: '3vw',
			height: '3vw',
			background: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			placeSelf: 'center',
			cursor: 'pointer',

			display: 'grid'
		},
		img: {
			transform: 'scale(.9)'
		}
	};

	return (
		<motion.span variants={variants} animate="visible" initial="visible">
			<motion.img
				variants={variants}
				animate="img"
				initial="img"
				onClick={click}
				title="¡Diseña tu cintillo perfecto con nosotros!"
				href={href}
				src="./img/svg/logo-cintix.svg"
				alt=""
			/>
		</motion.span>
	);
};
