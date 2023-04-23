import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Img } from './img';
import { Subtitle } from './Subtitle';
import { useRef } from 'react';

export const Unit = ({ detalles }) => {
	const { data, setData } = useContext(DataContext);
	const unitRef = useRef();

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
			ref={unitRef}
			variants={variants}
			animate="visible"
			initial="visible"
			id={detalles.id}
			key={detalles.id}
			title={detalles.seccion + detalles.color + '. Click para abrir.'}
			onClick={() => {
				setData({
					...data,
					modalDetailsUnitToggle: true,
					backgroundOpacity: true,
					backgroundOpacityFunction: () => {
						setData({
							...data,
							backgroundOpacity: false,
							modalDetailsUnitToggle: false
						});
					}
				});
			}}
		>
			<Img img={detalles.img} />
			<Subtitle text={detalles.unidad} />
		</motion.li>
	);
};
