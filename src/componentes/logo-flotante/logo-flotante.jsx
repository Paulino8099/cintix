import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import estilosLogoFlotante from '../../scss/logo-flotante.module.scss';

export const LogoFlotante = () => {
	const [ body ] = useState(document.getElementById('cuerpo'));

	useEffect(() => {
		console.log(body.scrollTop);
	});

	body.addEventListener('scroll', function() {
		alert(54);
	});

	return (
		<span className={estilosLogoFlotante.logoFlotante}>
			<img src="./img/png/logo-cintix.png" alt="logo-cintix" />
		</span>
	);
};
