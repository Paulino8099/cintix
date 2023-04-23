import { motion } from 'framer-motion';

export const Img = ({ img }) => {
	const variants = {
		visible: {
			background: '#66b33040',
			borderRadius: '50px',
			width: '100px',
			height: '100px',
			marginTop: ' 5%',
			marginBottom: ' 5%',
			objectFit: 'cover',
			transition: { duration: 0.03 }
		}
	};

	return <motion.img variants={variants} animate="visible" initial="visible" src={img} alt="" />;
};
