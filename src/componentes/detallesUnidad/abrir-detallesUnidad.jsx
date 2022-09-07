
import estilosDetallesUnidad from '../../scss/detallesUnidad.module.scss';
import estilosIndice from '../../index.module.scss';

export default function AbrirDetallesUnidad() {
	// abriendo detalles del cintillo seleccionado
	AbrirDetalleSeleccion();
	function AbrirDetalleSeleccion() {
		let detalleCintillo = document.querySelector('.' + estilosDetallesUnidad.detallesUnidad);

		detalleCintillo.classList.add(estilosDetallesUnidad.activar_detallesUnidad);
	}
	// desactivando fondo oscuro
	FondoOscuro();
	function FondoOscuro() {
		let fondoOscuro = document.querySelector('.' + estilosIndice.fondo_oscuro);

		fondoOscuro.classList.add(estilosIndice.activar_fondo_oscuro);
	}
};
