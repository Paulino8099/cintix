import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { ModoOscuro } from '../modoOscuro';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Icon } from './Icon';

export const BtnDarkMode = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			'box-shadow': 'inset 0 0 5px var(--color-4)',
			width: '2.8vw',
			height: '2.8vw',
			marginTop: data.btnNavBar ? '1vh' : '10vh',
			'border-radius': '50px',
			cursor: 'pointer',
			justifySelf: 'center',
			background: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: 0.3 },
			overflow: 'hidden',

			display: 'grid'
		}
	};

	// cambiando el color para poner todo en modo noche
	return (
		<motion.span
			variants={variants}
			animate="visible"
			initial="visible"
			onClick={() => {
				setData({ ...data, darkMode: !data.darkMode });
				document.documentElement.style.setProperty(
					'--darkMode',
					data.darkMode ? 'var(--darkMode-1)' : 'var(--darkMode-2)'
				);
			}}
			title={data.darkMode ? 'Desactivar el modo oscuro.' : 'Activar el modo oscuro.'}
		>
			<Icon scale={data.darkMode ? 'scale(0)' : 'scale(1)'} icon={<FaSun />} />
			<Icon scale={data.darkMode ? 'scale(1)' : 'scale(0)'} icon={<FaMoon />} />
		</motion.span>
	);
};
