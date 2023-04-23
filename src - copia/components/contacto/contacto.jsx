import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import estilos from '../../scss/contacto.module.scss';
import { Redes } from './redes-contacto';
import { BsFacebook, BsInstagram, BsWhatsapp, BsAt, BsTelephone, BsTelegram } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const Contacto = () => {
	const { data, setData } = useContext(DataContext);

	let opcionContacto = document.getElementById('opcion-contacto');
	return (
		<motion.div
			className={estilos.contacto}
			id="contacto"
			viewport={{
				once: false,
				// margin: '-25%'
			}}
			onViewportEnter={() => {
				setData({ ...data, nameSection: 'contacto' });
			}}
		>
			{/* titulo */}
			<motion.h1 className={estilos.titulo_contacto}>
				<b>Cont</b> acto
			</motion.h1>
			{/* redes */}
			<div className={estilos.redes_contacto}>
				<Redes
					className={estilos.facebook_contacto}
					id={1}
					href={''}
					logo={<BsFacebook />}
					subtitulo="Facebook"
				/>
				<Redes
					className={estilos.instagram_contacto}
					id={2}
					href={''}
					logo={<BsInstagram />}
					subtitulo="Instagram"
				/>
				<Redes
					className={estilos.whatsapp_contacto}
					id={3}
					href={
						'https://api.whatsapp.com/send?phone=+1-829-876-7637&text=*Hola David, te escribe ***, _¿qué tal?_*'
					}
					logo={<BsWhatsapp />}
					subtitulo="WhatsApp"
				/>
				<Redes
					className={estilos.telefono_contacto}
					id={4}
					href={'tel:+1-829-876-7637'}
					logo={<BsTelephone />}
					subtitulo="829-876-7637"
				/>
				<Redes
					className={estilos.telefono_contacto2}
					id={5}
					href={'tel:+1-849-846-9674'}
					logo={<BsTelephone />}
					subtitulo="849-846-9674"
				/>
				<Redes
					className={estilos.email_contacto}
					id={6}
					href={'mailto:dapa7928@gmail.com?subject=Hola ***, ¡Espero que todo marche bien!'}
					logo={<BsAt />}
					subtitulo="Email"
				/>
				<Redes
					className={estilos.telegram_contacto}
					id={7}
					href={''}
					logo={<BsTelegram />}
					subtitulo="Telegram"
				/>
			</div>
		</motion.div>
	);
};
