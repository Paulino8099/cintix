import React, { useState } from 'react';

export const OpcionesDetallesUnidad = ({ id, icono, guardadoFavorito, nombreOpcion, clase }) => {
	const [ detalles, detallesE ] = useState(JSON.parse(window.localStorage.getItem('detalles')));
	const [ local, localE ] = useState(window.localStorage.getItem('favoritos'));

	function favoritos() {
		if (local === null) {
			window.localStorage.setItem('favoritos', []);
		}

		window.localStorage.setItem('Favoritos', JSON.stringify([ `${detalles.unidad} ${detalles.id}` ]));
	}

	return (
		<span className={clase} key={id} id={id} onClick={favoritos()}>
			{icono}
			{guardadoFavorito}

			<p>{nombreOpcion}</p>
		</span>
	);
};
