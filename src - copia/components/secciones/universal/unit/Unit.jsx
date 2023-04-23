import { IconoFavoritoPrincipal } from './IconoFavoritoPrincipal';
import { VerificadorFavorito } from 'components/detallesUnidad/verificadorFavorito';
import { motion } from 'framer-motion';
import { Img } from './img';
import { Name } from './Name';

export const Unit = (props) => {
	localStorage.setItem(`detalles`, JSON.stringify(props.detalles));

	// todos los eventos a ejecutar al dar click en la unidad.
	function TodosEventos() {
		localStorage.setItem(`detalles`, JSON.stringify(props.detalles));
		VerificadorFavorito();
	}

	const variants = {
		visible: {
			position: 'relative',
			margin: '1vw',

			justifyItems: 'center',
			borderRadius: '15px',
			textDecoration: 'none',
			transition: { duration: 0.03 },
			cursor: 'pointer',

			display: 'grid'
		}
	};

	return (
		<motion.li
			variants={variants}
			animate="visible"
			initial="visible"
			id={props.id}
			key={props.id + '. ' + props.subtitulo + ' color.'}
			title={props.detalles.seccion + props.detalles.color + '. Click para abrir.'}
			onClick={() => {
				TodosEventos();
			}}
		>
			{/* <IconoFavoritoPrincipal
					id={props.id}
					detalles={props.detalles}
					unidad={props.unidad}
					color={props.color}
				/> */}
			<Img img={props.detalles.img} />
			<Name nameUnit={props.detalles.unidad} />
		</motion.li>
	);
};
