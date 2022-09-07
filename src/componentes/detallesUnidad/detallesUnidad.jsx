import React, { useState } from 'react';
import estilosDetallesUnidad from '../../scss/detallesUnidad.module.scss';
import CerrarDetallesUnidad from './cerrar-detallesUnidad';
import { OpcionesDetallesUnidad } from './opciones-detallesUnidad';
import { BsFillCartCheckFill, BsBookmarkHeartFill, BsCheck } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';
import { useEffect } from 'react';

export const DetallesUnidad = () => {
	const [ detalles, detallesE ] = useState(JSON.parse(window.localStorage.getItem('detalles')));

	//  contenedor para mostrar detalles de unidad seleccionado
	return (
		<div className={estilosDetallesUnidad.detallesUnidad}>
			{/* boton para cerrar ventana */}
			<i
				className={estilosDetallesUnidad.btn_cerrarVentana_detallesUnidad + ' fa-solid fa-close'}
				title="Cerrar detalles de esta unidad."
				onClick={() => {
					// cerrando el menu de navegacion
					CerrarDetallesUnidad();
				}}
			/>
			{/* opciones */}
			<div className={estilosDetallesUnidad.opciones_detallesUnidad}>
				{/* opcion comprar */}
				<OpcionesDetallesUnidad id={1} nombreOpcion={'Comprar Cintillo'} icono={<BsFillCartCheckFill />} />
				{/* opcion favorito */}
				<OpcionesDetallesUnidad
					id={1}
					nombreOpcion={'Agregar a favorito'}
					icono={<BsBookmarkHeartFill />}
					guardadoFavorito={<BsCheck className={estilosDetallesUnidad.guardadoFavorito} />}
				/>
			</div>
			{/* imagenes a mostrar de la unidad */}
			<div className={estilosDetallesUnidad.imagenes_detallesUnidad}>
				{/* imagenes de la unidad */}
				<span className={estilosDetallesUnidad.imagen_detallesUnidad}>
					<img src={`./img/svg/${detalles.color}/1.svg`} key={1} alt={1} />
					<img src={`./img/svg/${detalles.color}/2.svg`} key={2} alt={2} />
				</span>
				{/* costo de la unidad */}
				<h3 className={estilosDetallesUnidad.costoUnidad}>$ 124.99</h3>
			</div>
			{/* detalles de la unidad */}
			<div className={estilosDetallesUnidad.descripcion_detallesUnidad}>
				<h3 className={estilosDetallesUnidad.titulo_detallesUnidad}>
					{detalles.unidad + ' ' + detalles.color}
					<br />
					{detalles.estilo}
				</h3>
				<hr />
				<p className={estilosDetallesUnidad.texto_detallesUnidad}>
					La elegancia completa se complementa con adornos sencillos y delicados. Para esa ocasión tan
					importante un cintillo siempre puede marcar la diferencia 😁.
				</p>
			</div>
			{/* btn para recargar datos de la ventana */}
			<AiOutlineReload
				className={estilosDetallesUnidad.btnRecargarDatos}
				onClick={() => {
					detallesE(JSON.parse(window.localStorage.getItem('detalles')));
				}}
				title={'Recargar datos del ' + detalles.unidad + '.'}
			/>
		</div>
	);
};
