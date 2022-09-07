import estilosMenuFlotante from '../../scss/menu-flotante.module.scss';
import { motion } from 'framer-motion';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { OpcionMenuFlotante } from './opcion-menuFlotante';

export const MenuFlotante = () => {
	return (
		<div className={estilosMenuFlotante.menuFlotante}>
			{/* boton para abrir/cerrar el menu flotante */}
			<div
				className={estilosMenuFlotante.btn_menuFlotante}
				onClick={() => {
					const btn_menuFlotante = document.querySelector('.' + estilosMenuFlotante.menuFlotante);

					btn_menuFlotante.classList.toggle(estilosMenuFlotante.active_menuFlotante);
				}}
			>
				<span />
				<span />
			</div>
			<ul className={estilosMenuFlotante.listaOpciones_menuFlotante}>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={1}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={2}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={3}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={4}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={5}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={6}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={7}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={8}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={9}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
				<OpcionMenuFlotante
					clase={estilosMenuFlotante.opcionFavoritos_menuFlotante}
					id={10}
					icono={<BsBookmarkHeartFill />}
					nombreOpcion={estilosMenuFlotante.nombreOpcion_menuFlotante}
					contador={estilosMenuFlotante.contadorFavoritos_menuFlotante}
				/>
			</ul>
		</div>
	);
};
