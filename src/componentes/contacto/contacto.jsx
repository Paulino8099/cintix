import React, { useEffect, useState } from 'react';
import estilosContacto from '../../scss/contacto.module.scss';
import { motion } from 'framer-motion';
import { Redes } from './redes-contacto';
import { BsFacebook, BsInstagram, BsWhatsapp, BsAt, BsTelephone, BsTelegram } from 'react-icons/bs';

export const Contacto = () => {
	const [ contador, contadorE ] = useState(0);

	useEffect(() => {
		document.title = contador;
		localStorage.setItem(`detales`, contador);
		// console.log('did update...');
	});

	return (
		<section className={estilosContacto.contacto} id="contacto">
			{/* titulo */}
			<motion.h1 className={estilosContacto.titulo_contacto}>
				<b>Cont</b> acto
			</motion.h1>
			{/* redes */}
			<div className={estilosContacto.redes_contacto}>
				<Redes
					className={estilosContacto.facebook_contacto}
					id={1}
					href={''}
					logo={<BsFacebook />}
					subtitulo="Facebook"
				/>
				<Redes
					className={estilosContacto.instagram_contacto}
					id={2}
					href={''}
					logo={<BsInstagram />}
					subtitulo="Instagram"
				/>
				<Redes
					className={estilosContacto.whatsapp_contacto}
					id={3}
					href={
						'https://api.whatsapp.com/send?phone=+1-829-876-7637&text=*Hola David, te escribe ***, _¿qué tal?_*'
					}
					logo={<BsWhatsapp />}
					subtitulo="WhatsApp"
				/>
				<Redes
					className={estilosContacto.telefono_contacto}
					id={4}
					href={'tel:+1-829-876-7637'}
					logo={<BsTelephone />}
					subtitulo="829-876-7637"
				/>
				<Redes
					className={estilosContacto.telefono_contacto2}
					id={5}
					href={'tel:+1-849-846-9674'}
					logo={<BsTelephone />}
					subtitulo="849-846-9674"
				/>
				<Redes
					className={estilosContacto.email_contacto}
					id={6}
					href={'mailto:dapa7928@gmail.com?subject=Hola ***, ¡Espero que todo marche bien!'}
					logo={<BsAt />}
					subtitulo="Email"
				/>
				<Redes
					className={estilosContacto.telegram_contacto}
					id={7}
					href={''}
					logo={<BsTelegram />}
					subtitulo="Telegram"
				/>
			</div>
			<div className={estilosContacto.contador}>
				<h3>{contador}</h3>
				<button
					onClick={() => {
						contadorE(contador + 1);
					}}
				>
					{' '}
					click
				</button>
			</div>
		</section>
	);
};
