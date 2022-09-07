import estilosDetallesUnidad from '../../scss/detallesUnidad.module.scss';
import estilosIndice from '../../index.module.scss';

export default function CerrarDetallesUnidad() {
	// cerrando detalles de cintillo
	AbrirDetallesUnidad();
	function AbrirDetallesUnidad() {
		let detalleCintillo = document.querySelector('.' + estilosDetallesUnidad.detallesUnidad);

		detalleCintillo.classList.remove(estilosDetallesUnidad.activar_detallesUnidad);
	}
	// desactivando fondo oscuro
	FondoOscuro();
	function FondoOscuro() {
		let fondoOscuro = document.querySelector('.' + estilosIndice.fondo_oscuro);

		fondoOscuro.classList.remove(estilosIndice.activar_fondo_oscuro);
	}
};