import { useEffect, useState } from 'react';

export function DetallesUnidadLocalS({ params }) {
	const [ detallesUnidadLocalS, eDetallesUndiadLocalS ] = useState(params);

	useEffect(
		() => {
            eDetallesUndiadLocalS(params);
		},
		[ params ] //eslint-disable-line
	);

	return { detallesUnidadLocalS };
}
