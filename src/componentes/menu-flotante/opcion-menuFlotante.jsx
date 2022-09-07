import { motion } from 'framer-motion';

export const OpcionMenuFlotante = ({ nombreOpcion, id, icono, clase, contador }) => {
	return (
		<motion.li
			className={clase}
			id={id}
			key={id}
			animate={{ transitionDelay: id * 0.1 + 's' }}
		>
			{icono}
			<motion.p className={nombreOpcion} animate={{ transitionDelay: id * 0.15 + 's' }}>
				Favoritos
			</motion.p>
			<motion.p className={contador} animate={{ transitionDelay: id * 0.15 + 's' }}>
				0
			</motion.p>
		</motion.li>
	);
};
