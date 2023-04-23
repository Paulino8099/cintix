import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { BsFacebook, BsInstagram, BsWhatsapp, BsAt, BsTelephone, BsTelegram } from 'react-icons/bs';
import { Red } from './Red/Red';

export const Redes = ({ idSeccion, children }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			marginLeft: 'calc(3.5vw - 1vw)',
			transition: { duration: 0.03 },
			marginTop: '8vw',

			display: 'grid',
			gridTemplateColumns: 'repeat(2, minmax(5vw, 15vw))'
		}
	};

	return (
		<motion.div variants={variants} animate="visible" initial="visible" id={idSeccion}>
			<Red id={1} href={''} logo={<BsFacebook />} subTitle="Facebook" color="#1e23b3" />
			<Red id={2} href={''} logo={<BsInstagram />} subTitle="Instagram" color="#e25300" />
			<Red
				id={3}
				href={
					'https://api.whatsapp.com/send?phone=+1-829-876-7637&text=*Hola David, te escribe ***, _¿qué tal?_*'
				}
				logo={<BsWhatsapp />}
				subTitle="WhatsApp"
				color="#0e9419"
			/>
			<Red id={4} href={'tel:+1-829-876-7637'} logo={<BsTelephone />} subTitle="829-876-7637" color="#8f009f" />
			<Red id={5} href={'tel:+1-849-846-9674'} logo={<BsTelephone />} subTitle="849-846-9674" color="#9f0075" />
			<Red
				id={6}
				href={'mailto:dapa7928@gmail.com?subject=Hola ***, ¡Espero que todo marche bien!'}
				logo={<BsAt />}
				subTitle="Email"
				color="#000000"
			/>
			<Red id={7} href={''} logo={<BsTelegram />} subTitle="Telegram" color="#00638e" />
		</motion.div>
	);
};
