import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Unit } from 'components/sectiones/sectionCintix/universal/unit/Unit';

export const Units = ({ units }) => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			width: '90%',
			justifySelf: 'center',
			justifyContent: 'space-around',
			listStyle: 'none',
			marginTop: '8vw',
			transition: { duration: 0.03 },

			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 150px))'
		}
	};

	return (
		<motion.ul variants={variants} animate="visible" initial="visible">
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/azulLapicero/1.png',
					nombre: 'Cintillo Azúl-Royal',
					seccion: 'Cintillo',
					color: 'Azúl-Royal',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 1
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/azulLapiceroYblanco/1.png',
					nombre: 'Cintillo Azúl-Royal con Blanco',
					seccion: 'Cintillo',
					color: 'Azúl-Royal con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 2
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/moradoLila/1.png',
					nombre: 'Cintillo Morado-Lila',
					seccion: 'Cintillo',
					color: 'Morado-Lila',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 3
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/moradoLilaYblanco/1.png',
					nombre: 'Cintillo Morado-Lila con Blanco',
					seccion: 'Cintillo',
					color: 'Morado-Lila con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 4
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/negroYblanco/1.png',
					nombre: 'Cintillo Negro con Blanco',
					seccion: 'Cintillo',
					color: 'Negro con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 5
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/rojovino/1.png',
					nombre: 'Cintillo Rojo-Vino',
					seccion: 'Cintillo',
					color: 'Rojo-Vino',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 6
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/rojoVinoYblanco/1.png',
					nombre: 'Cintillo Rojo-Vino con Blanco',
					seccion: 'Cintillo',
					color: 'Rojo-Vino con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 7
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/rosado/1.png',
					nombre: 'Cintillo Rosado',
					seccion: 'Cintillo',
					color: 'Rosado',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 8
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verde/1.png',
					nombre: 'Cintillo Verde',
					seccion: 'Cintillo',
					color: 'Verde',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 9
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verdeb/1.png',
					nombre: 'Cintillo Verde con Blanco',
					seccion: 'Cintillo',
					color: 'Verde con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 10
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verdebl/1.png',
					nombre: 'Cintillo Verde con Blanco',
					seccion: 'Cintillo',
					color: 'Verde con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 11
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verdeblanco/1.png',
					nombre: 'Cintillo Verde con Blanco',
					seccion: 'Cintillo',
					color: 'Verde con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 12
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verdeCotorra/1.png',
					nombre: 'Cintillo Verde-Cotorra',
					seccion: 'Cintillo',
					color: 'Verde-Cotorra',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 13
				}}
			/>
			<Unit
				detalles={{
					cost: '$75.00',
					img: './img/cintillos/png/verdeCotorraYblanco/1.png',
					nombre: 'Cintillo Verde-Cotorra con Blanco',
					seccion: 'Cintillo',
					color: 'Verde-Cotorra con Blanco',
					estilo: 'Flor Pullita',
					unidad: 'Cintillo',
					id: 14
				}}
			/>
		</motion.ul>
	);
};
