import { Fragment } from 'react';
import { useState } from 'react';
import estilosIndice from '../../index.module.scss';

export const RenombrarColorUnidad = () => {
	const [ detallesUnidad, detallesE ] = useState(JSON.parse(localStorage.getItem('detalles')));
	const [ data ] = useState({
		subtituloUnidad: detallesUnidad.seccion,
		ultimaLetra: detallesUnidad.color.substr(-1),
		nombreColor: detallesUnidad.color,
		eliminarUltimaLetra: detallesUnidad.color.slice(0, detallesUnidad.color.length - 1)
	});

	let cambioUltimaLetra = data.nombreColor;

	if (data.ultimaLetra === 'o' && data.subtituloUnidad === 'Venda') {
		cambioUltimaLetra = data.eliminarUltimaLetra + 'a';
	}

	return (
		<h3 className={estilosIndice.renombreColorUnidad} key={1}>125
		</h3>
	);
};
