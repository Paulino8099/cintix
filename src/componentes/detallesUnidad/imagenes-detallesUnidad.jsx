import { motion } from 'framer-motion';

export const ImagenDetallesUnidads = ({img, id}) => {
	return <motion.img  src={img} id={id} key={id} alt={id} />;
};
