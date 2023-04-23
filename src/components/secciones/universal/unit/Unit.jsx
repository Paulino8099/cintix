import { useContext } from 'react';
import { DataContext } from 'provider/DataProvider';
import { motion } from 'framer-motion';
import { Img } from './img';
import { Subtitle } from './Subtitle';
import { useRef } from 'react';
import { IconFavorite } from './IconFavorite';

export const Unit = ({ img, nameUnit, costUnit, color, id }) => {
	const { data, setData } = useContext(DataContext);
	const unitRef = useRef();

	function handleClick() {
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
			},
			idUnit: `${nameUnit}${id}`,
			imgUnit: img,
			nameUnit: nameUnit,
			costUnit: costUnit
		});
	}

	const variants = {
		visible: {
			background: '#66b33040',
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
			id={id}
			key={id}
			title={nameUnit + color + '. Click para abrir.'}
			onClick={handleClick}
		>
			<IconFavorite id={`${nameUnit}${id}`}/>
			<Img img={img} />
			<Subtitle text={nameUnit} />
		</motion.li>
	);
};
