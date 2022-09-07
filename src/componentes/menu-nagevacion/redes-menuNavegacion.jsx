import React from 'react';

export const Redes = ({ id, icono, href, nombre }) => {
	return (
		<a id={id} key={id} title={`Ir al ${nombre} de Cintix.`} href={href} target="_blank" rel="noreferrer">
			{icono}
		</a>
	);
};
