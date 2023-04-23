import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Mitad } from './Mitad';

export const Title = ({ mitadTitulo1, mitadTitulo2,id }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			background: `linear-gradient( 90deg,
                        var(--color-3) 0%,
                        var(--color-3) 52%,
                        ${data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)'} 52%,
                        ${data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)'} 100%)`,
			boxShadow: '0 0 5px #66b330bf',
			width: 'min-content',
			height: 'min-content',
			textDecoration: 'none',
			padding: '5px 10px',
			borderRadius: '5px',
			fontSize: '3vw',
			justifySelf: 'center',
			margin: '2vw 0',
			color: data.darkMode ? 'var(--darkMode-2)' : 'var(--darkMode-1)',
			transition: { duration: 0.03 },

			display: 'flex'
		}
	};

	return (
		<motion.span variants={variants} animate="visible" initial="visible" onViewportEnter={() => {
			setData({...data, nameSection: id})
		}}>
			{mitadTitulo1} {<Mitad mitad={mitadTitulo2} />}
		</motion.span>
	);
};
