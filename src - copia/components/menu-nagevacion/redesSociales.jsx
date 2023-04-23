import { RedSocial } from './redSocial';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';

export const RedesSociales = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			width: '100%',
			padding: '0.5vw 0',
			justifyContent: 'space-around',
			alignSelf: 'flex-end',
			justifySelf: 'center',
			alignItems: 'center',

			display: 'flex'
		}
	};

	return (
		<motion.ul variants={variants} animate="visible" initial="visible">
			<RedSocial
				id={1}
				icono={<BsWhatsapp />}
				nombre={'WhatsApp'}
				href={
					'https://api.whatsapp.com/send?phone=+1-829-876-7637&text=*Hola David, te escribe ***, _¿qué tal?_*'
				}
				opacity={data.btnNavBar ? 1 : 0}
			/>
			<RedSocial
				id={2}
				icono={<BsFacebook />}
				nombre={'Facebook'}
				href={
					'https://api.whatsapp.com/send?phone=+1-829-792-2591&text=*Hola David, te escribe ***, _¿qué tal?_*'
				}
			/>
			<RedSocial
				id={3}
				icono={<BsInstagram />}
				nombre={'Instagram'}
				href={
					'https://api.whatsapp.com/send?phone=+1-829-876-7637&text=*Hola David, te escribe ***, _¿qué tal?_*'
				}
				opacity={data.btnNavBar ? 1 : 0}
			/>
		</motion.ul>
	);
};
