import React, { useState } from 'react';
import estilosMenuNavegacion from '../../scss/menu-navegacion.module.scss';
import CerrarDetallesUnidad from 'componentes/detallesUnidad/cerrar-detallesUnidad';
import CerrarMenuNavegacion from './cerrar-MenuNavegacion';
import { motion } from 'framer-motion';
import { OpcionesMenu } from './opciones-menuNavegacion';
import { Redes } from './redes-menuNavegacion';
import { BtnModoOscurso } from './btn-modoOscuro';
import {
	BsFlower1,
	BsFlower2,
	BsFlower3,
	BsFillPatchQuestionFill,
	BsFillPersonLinesFill,
	BsWhatsapp,
	BsFacebook,
	BsInstagram
} from 'react-icons/bs';

export function MenuNavegacion() {
	const [ activo, activoE ] = useState(true);

	return (
		<div
			className={
				activo ? (
					estilosMenuNavegacion.menu_navegacion
				) : (
					estilosMenuNavegacion.menu_navegacion + ' ' + estilosMenuNavegacion.activar_menuNavegacion
				)
			}
		>
			<div className={estilosMenuNavegacion.contenido_menuNavegacion}>
				{/* botones del logo, cerrar y del modo oscuro */}
				<div className={estilosMenuNavegacion.logo_btnCerrar_btnModoOscuro}>
					{/* logo de la pagina */}
					<motion.a
						className={estilosMenuNavegacion.logo_menuNavegacion}
						animate={{
							animationDelay: 3
						}}
						onClick={(e) => {
							CerrarMenuNavegacion();
							e.target.title = `¡Diseña tu cintillo perfecto con nosotros!`;
						}}
						title="¡Diseña tu cintillo perfecto con nosotros!"
						href="#cabecera"
					>
						<img src="./img/svg/logo-cintix.svg" alt="" />
					</motion.a>
					{/* boton modo oscuro */}
					<BtnModoOscurso />
					{/* boton abrir/cerrar */}
					<div
						className={
							activo ? (
								estilosMenuNavegacion.boton_AbrirCerrar_menu
							) : (
								estilosMenuNavegacion.boton_AbrirCerrar_menu +
								' ' +
								estilosMenuNavegacion.activar_menuNavegacion
							)
						}
						onClick={() => {
							activoE((current) => !current);
							CerrarDetallesUnidad();
						}}
					>
						<span className={estilosMenuNavegacion.linea1} />
						<span className={estilosMenuNavegacion.linea2} />
						<span className={estilosMenuNavegacion.linea3} />
					</div>
				</div>
				{/* lista de las opciones */}
				<motion.ul layout transition={{ duration: 2 }} className={estilosMenuNavegacion.opciones_menu}>
					<OpcionesMenu
						className={estilosMenuNavegacion.seccionCintillo}
						logo={<BsFlower1 />}
						id="1"
						nombreOpcion={'Cintillos'}
						href="#Cintillos"
					/>
					<OpcionesMenu
						className={estilosMenuNavegacion.seccionganchos}
						logo={<BsFlower2 />}
						id="2"
						nombreOpcion={'Ganchos'}
						href="#Ganchos"
					/>
					<OpcionesMenu
						className={estilosMenuNavegacion.seccionVendas}
						logo={<BsFlower3 />}
						id="3"
						nombreOpcion={'Vendas'}
						href="#Vendas"
					/>
					<OpcionesMenu
						className={estilosMenuNavegacion.seccionDescubrir}
						logo={<BsFillPatchQuestionFill />}
						id="3"
						nombreOpcion={'Descubrir'}
						href="#Descubrir"
					/>
					<OpcionesMenu
						className={estilosMenuNavegacion.seccionContacto}
						logo={<BsFillPersonLinesFill />}
						id="4"
						nombreOpcion={'Contacto'}
						href="#contacto"
					/>
				</motion.ul>
				{/* redes sociales */}
				<ul className={estilosMenuNavegacion.redes_menu}>
					<Redes
						id={2}
						icono={<BsWhatsapp />}
						nombre={'WhatsApp'}
						href={
							'https://api.whatsapp.com/send?phone=+1-829-792-2591&text=*Hola David, te escribe ***, _¿qué tal?_*'
						}
					/>
					<Redes
						id={1}
						icono={<BsFacebook />}
						nombre={'Facebook'}
						href={
							'https://api.whatsapp.com/send?phone=+1-829-792-2591&text=*Hola David, te escribe ***, _¿qué tal?_*'
						}
					/>
					<Redes
						id={3}
						icono={<BsInstagram />}
						nombre={'Instagram'}
						href={
							'https://api.whatsapp.com/send?phone=+1-829-792-2591&text=*Hola David, te escribe ***, _¿qué tal?_*'
						}
					/>
				</ul>
			</div>
		</div>
	);
}
