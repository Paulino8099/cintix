import { useState } from 'react';
import estilos from '../../scss/menu-flotante/menu-flotante.module.scss';
import { motion } from 'framer-motion';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { OpcionMenuFlotante } from './opcion-menuFlotante';

export const MenuFlotante = () => {
	const [ cintillosFav, cintillosFavE ] = useState(
		localStorage.getItem('cintillosFav') !== null ? JSON.parse(localStorage.getItem('cintillosFav')).length : 0
	);
	const [ ganchosFav, ganchosFavE ] = useState(
		localStorage.getItem('ganchosFav') !== null ? JSON.parse(localStorage.getItem('ganchosFav')).length : 0
	);
	const [ vendasFav, vendasFavE ] = useState(
		localStorage.getItem('vendasFav') !== null ? JSON.parse(localStorage.getItem('vendasFav')).length : 0
	);

	return (
		<motion.div className={estilos.menuFlotante} id="menu-flotante">
			{/* boton para abrir/cerrar el menu flotante */}
			<div
				className={estilos.btn_menuFlotante}
				onClick={() => {
					const btn_menuFlotante = document.querySelector('.' + estilos.menuFlotante);

					btn_menuFlotante.classList.toggle(estilos.active_menuFlotante);

					cintillosFavE(
						localStorage.getItem('cintillosFav') !== null
							? JSON.parse(localStorage.getItem('cintillosFav')).length
							: 0
					);
					ganchosFavE(
						localStorage.getItem('ganchosFav') !== null
							? JSON.parse(localStorage.getItem('ganchosFav')).length
							: 0
					);
					vendasFavE(
						localStorage.getItem('vendasFav') !== null
							? JSON.parse(localStorage.getItem('vendasFav')).length
							: 0
					);
				}}
			>
				<span />
				<span />
			</div>
			{/* todas las opciones */}
			<div className={estilos.contenedor_menuFlotante}>
				{/* Favoritos */}
				<div className={estilos.listadoOpciones_menuFlotante}>
					<h3 className={estilos.titulo_listadosOpciones_menuFlotante}>Favoritos</h3>
					<ul className={estilos.opcionesFavoritos_menuFlotante}>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'Cintillos'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={cintillosFav}
						/>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'Ganchos'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={ganchosFav}
						/>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'Vendas'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={vendasFav}
						/>
					</ul>
				</div>
				{/* ajustes */}
				<div className={estilos.listadoOpciones_menuFlotante}>
					<h3 className={estilos.titulo_listadosOpciones_menuFlotante}>Ajustes</h3>
					<ul className={estilos.opcionesFavoritos_menuFlotante}>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'Apariencia'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={1}
						/>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'Reloj'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={1}
						/>
					</ul>
				</div>
				{/* Pendientes */}
				<div className={estilos.listadoOpciones_menuFlotante}>
					<h3 className={estilos.titulo_listadosOpciones_menuFlotante}>Pendientes</h3>
					<ul className={estilos.opcionesFavoritos_menuFlotante}>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'pedidos'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={1}
						/>
						<OpcionMenuFlotante
							clase={estilos.opcionFavoritos_menuFlotante}
							id={1}
							icono={<BsBookmarkHeartFill />}
							claseNombreOpcion={estilos.nombreOpcion_menuFlotante}
							nombreOpcion={'pagos'}
							claseContador={estilos.contadorFavoritos_menuFlotante}
							contador={1}
						/>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};
