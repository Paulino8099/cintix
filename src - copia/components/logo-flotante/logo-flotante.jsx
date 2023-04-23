import React, {useContext} from 'react';
import { Logo } from 'components/universal/LogoPage';
import { motion } from 'framer-motion';
import { DataContext } from 'provider/DataProvider';

export const LogoFlotante = () => {
	const data = useContext(DataContext);

	const variants = {
		visible: {
			position: 'fixed',
			width: 'min-content',
			height: 'min-content',
			margin: '2vw',
			bottom: 0,
			cursor: 'pointer',
			opacity: data.btnNavBar ? 1 : 0,
			'pointer-events': data.btnNavBar ? "visible" :  'none',

			display: 'grid'
		}
	};

	return (
		<motion.span
			variants={variants}
			initial="visible"
			title="Click para ir al inicio de la página."
			href="#cabecera"
		>
			{/* <Logo className={estilosLogo.logo} href="#cabecera" /> */}
		</motion.span>
	);
};
