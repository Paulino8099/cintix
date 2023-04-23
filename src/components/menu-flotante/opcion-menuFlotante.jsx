import { motion } from 'framer-motion';

export const OpcionMenuFlotante = ({ claseNombreOpcion, nombreOpcion, id, icono, clase, claseContador, contador }) => {
	return (
		<motion.li className={clase} id={id} key={id} animate={{ transitionDelay: id * 0.1 + 's' }}>
			{icono}
			<motion.p className={claseNombreOpcion} animate={{ transitionDelay: id * 0.15 + 's' }}>
				{nombreOpcion}
			</motion.p>
			<motion.p className={claseContador} animate={{ transitionDelay: id * 0.15 + 's' }}>
				{contador}
			</motion.p>
		</motion.li>
	);
};
