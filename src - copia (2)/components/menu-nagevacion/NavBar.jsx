import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { RedesSociales } from './redesSociales';
import { Opciones } from './opciones';
import { motion } from 'framer-motion';
import { BtnAbrirCerrar } from './btn-abrirCerrar';
import { BtnDarkMode } from './btnDarkMode/BtnDarkMode';
import { Logo } from './Logo';

export function NavBar() {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'fixed',
			width: data.btnNavBar ? '20vw' : '5vw',
			height: '100vh',
			top: 0,
			right: 0,
			transition: { duration: .3 },
			background: 'var(--color-3)',
			boxShadow: '0 0 10px #252323',
			zIndex: 600,

			display: 'grid'
		}
	};

	return (
		<motion.div variants={variants} animate="visible" initial="visible">
			<Logo />
			<BtnDarkMode />
			<BtnAbrirCerrar />
			<Opciones />
			<RedesSociales />
		</motion.div>
	);
}
