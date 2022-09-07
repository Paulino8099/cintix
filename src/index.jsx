import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Cabecera } from './componentes/cabecera/cabecera';
import { Seciones } from 'componentes/secciones/secciones';
import { DetallesUnidad } from 'componentes/detallesUnidad/detallesUnidad';
import { MenuNavegacion } from 'componentes/menu-nagevacion/menu-navegacion';
import { Contacto } from 'componentes/contacto/contacto';
import { PiePagina } from 'componentes/pie-pagina/pie-pagina';
import { MenuFlotante } from 'componentes/menu-flotante/menu-flotante';
import { LogoFlotante } from 'componentes/logo-flotante/logo-flotante';

// estilos
import estilosIndice from './index.module.scss';
import 'css/css/all.min.css';

ReactDOM.render(
	<Fragment>
		<MenuNavegacion />
		<Cabecera />
		<Seciones />
		<DetallesUnidad />
		<Contacto />
		<PiePagina />
		<MenuFlotante />
		<LogoFlotante />
		<span className={estilosIndice.fondo_oscuro} />
	</Fragment>,
	document.getElementById('cuerpo')
);
