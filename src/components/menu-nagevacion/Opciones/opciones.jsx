import React, { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { Opcion } from './opcion/Opcion';
import { motion } from 'framer-motion';
import { BsFlower1, BsFlower2, BsFlower3, BsFillPatchQuestionFill, BsFillPersonLinesFill } from 'react-icons/bs';

export const Opciones = () => {
	const { data, setData } = useContext(DataContext);

	const variants = {
		visible: {
			position: 'absolute',
			width: '100%',
			padding: 0,
			margin: 0,
			height: '25vw',
			alignContent: 'space-around',
			listStyle: 'none',
			alignSelf: 'center',

			display: 'grid'
		}
	};

	return (
		<motion.ul layout variants={variants} animate="visible" initial="vivible">
			<Opcion icono={<BsFlower1 />} id="1" nombreOpcion={'Cintillos'} enlace="#cintillos" />
			<Opcion icono={<BsFlower2 />} id="2" nombreOpcion={'Ganchos'} enlace="#ganchos" />
			<Opcion icono={<BsFlower3 />} id="3" nombreOpcion={'Vendas'} enlace="#vendas" />
			<Opcion icono={<BsFillPatchQuestionFill />} id="4" nombreOpcion={'Descubrir'} enlace="#descubrir" />
			<Opcion icono={<BsFillPersonLinesFill />} id="5" nombreOpcion={'Contacto'} enlace="#contacto" />
		</motion.ul>
	);
};
