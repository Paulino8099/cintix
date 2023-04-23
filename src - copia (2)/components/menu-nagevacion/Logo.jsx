import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { LogoPage } from 'components/universal/LogoPage';

export function Logo() {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
            position: 'absolute',
            margin: '1vh',
			transition: { duration: 0.5, delay: .1, type: 'spring' },
            transform: data.btnNavBar ? 'scale(1)' : 'scale(0)',
            opacity: data.btnNavBar ? 1 : 0,

			display: 'grid'
		}
	};

	return (
        <motion.div variants={variants} animate="visible" initial="visible">
            <LogoPage />
		</motion.div>
	);
}
