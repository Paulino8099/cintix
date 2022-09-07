import React from 'react';
import { motion } from 'framer-motion';

export const SvgTitulo = ({ clase }) => {
	const variantePath = {
		ocultar: {
			pathLength: 0,
			fill: '#000000',
			stroke: '#66b330',
			filter: 'drop-shadow(0 0 0px #66b330)'
		},
		mostrar: {
			pathLength: 1,
			fill: '#66b330',
			stroke: '#000000',
			filter: 'drop-shadow(0 0 5px #66b330)',
			transition: {
				delay: 0.1,
				duration: 1.5,
				ease: 'easeInOut'
			}
		}
	};
	return (
		<motion.svg
			className={clase}
			variants={variantePath}
			initial={'ocultar'}
			whileInView={'mostrar'}
			viewport={{
				once: false
			}}
			viewBox="0 0 406.08 79.19"
		>
			<motion.path
				variants={variantePath}
				d="M56.65,37.65a14.35,14.35,0,0,1-1.26,5.55A20.36,20.36,0,0,1,44.5,53.72a24.83,24.83,0,0,1-9.82,1.8A34.16,34.16,0,0,1,27,54.71a20.76,20.76,0,0,1-11.53-7,26.57,26.57,0,0,1-3.63-5.66,29.67,29.67,0,0,1-2.25-6.68,36.54,36.54,0,0,1-.75-7.55,33.42,33.42,0,0,1,1.89-11.61,24.64,24.64,0,0,1,5.4-8.77A23.52,23.52,0,0,1,24.32,1.9,26.84,26.84,0,0,1,34.39,0,25.24,25.24,0,0,1,46,2.6,21.05,21.05,0,0,1,53.8,9a12.73,12.73,0,0,1,2.71,7.23,4.74,4.74,0,0,1-1.32,3.3A4.18,4.18,0,0,1,52,21a4.45,4.45,0,0,1-3.13-1l-.69-.66c-.9-1.51-3-4.84-4.72-7.4l-1.91-1.32a12.21,12.21,0,0,0-7.09-2,12.84,12.84,0,0,0-10.67,5.09q-4,5.1-4,14.47a26.92,26.92,0,0,0,1.76,10.42,13.08,13.08,0,0,0,5,6.2,13.76,13.76,0,0,0,7.55,2.06A13.23,13.23,0,0,0,42,44.55L44.19,43c1.5-2.9,3.19-6.44,3.76-7.85l.68-.89a3.92,3.92,0,0,1,3.3-1.34,4.63,4.63,0,0,1,3.33,1.36A4.49,4.49,0,0,1,56.65,37.65Z"
			/>
			<motion.path
				variants={variantePath}
				d="M108.29,10.22a5.3,5.3,0,0,1-3.57-1.28,4.55,4.55,0,0,1-1.48-3.63,4.49,4.49,0,0,1,1.52-3.5A5.12,5.12,0,0,1,108.29.44a5.29,5.29,0,0,1,3.44,1.24,4.45,4.45,0,0,1,1.5,3.63,4.57,4.57,0,0,1-1.46,3.61A5.11,5.11,0,0,1,108.29,10.22Zm4.47,7.15c.26,1.75.47,9.68.47,17.62s-.21,16-.47,18l-1,1a4.77,4.77,0,0,1-3.63,1.54,4.53,4.53,0,0,1-3.57-1.58l-.92-1c-.25-1.9-.45-9.89-.45-17.75s.2-15.86.45-17.77l.92-1a4.63,4.63,0,0,1,3.57-1.5,4.8,4.8,0,0,1,3.63,1.5Z"
			/>
			<motion.path
				variants={variantePath}
				d="M169.93,18.19c.12,1.21.21,2.48.21,2.81s1.66-1.2,3.68-3.42l2.09-1.08a15.34,15.34,0,0,1,7.2-1.63,14.37,14.37,0,0,1,7.07,1.72l2.07,1.15A44.17,44.17,0,0,1,195.91,24l.2,1.42.19,1.41c.06,2.2.1,8.19.1,13.31S196.2,51,195.94,53L195,54a4.93,4.93,0,0,1-7.2,0l-.93-1c-.25-1.9-.46-7.2-.46-11.78S186.23,30.16,186,27l-.91-1.75c-.92-1.74-2.74-2.61-5.48-2.61a8.13,8.13,0,0,0-4.87,1.59,9.16,9.16,0,0,0-3.22,4.37L171,30.05c-.13,3.78-.24,9.68-.24,13.13S170.55,51,170.3,53l-.94,1a4.77,4.77,0,0,1-3.65,1.52,4.53,4.53,0,0,1-3.55-1.58l-.93-1c-.25-1.9-.46-10-.46-17.9s.19-15.94.41-17.77l.83-.94a4.32,4.32,0,0,1,3.41-1.41,4.67,4.67,0,0,1,2.38.62,4.43,4.43,0,0,1,1.7,1.87Z"
			/>
			<motion.path
				variants={variantePath}
				d="M241.74,16.08c1.47-.18,2.92-.33,3.22-.33s.55-1.35.55-3,0-4.29,0-5.87l.09-.92a5.55,5.55,0,0,1,.71-2.36A4.52,4.52,0,0,1,248,1.92a4.84,4.84,0,0,1,2.45-.64h1.27a16.63,16.63,0,0,1,3.29,2.84l.18.92.19.91c.05,1.64.09,4.52.09,6.39s.82,3.41,1.83,3.41a41.38,41.38,0,0,1,4.33.33l.74.67a3.33,3.33,0,0,1,1.12,2.59,2.9,2.9,0,0,1-1.59,2.82l-1.07.53c-1.92.15-3.91.27-4.43.27s-.93,4.14-.93,9.19,0,10.44.05,12l.11.84a3.71,3.71,0,0,0,.88,2,3,3,0,0,0,2.33.79,12.26,12.26,0,0,0,2.38-.31,12.11,12.11,0,0,1,2.34-.31,3,3,0,0,1,2.18,1,3.24,3.24,0,0,1,1,2.4,4,4,0,0,1-2.64,3.7,17.85,17.85,0,0,1-7.58,1.28q-4.68,0-7.1-1.58a7.31,7.31,0,0,1-3.17-4.36l-.5-1.85c-.14-3.07-.25-9.9-.25-15.17s-.3-9.6-.66-9.6-1.8-.15-3.2-.34l-.75-.68a3.35,3.35,0,0,1-1.14-2.6A3.27,3.27,0,0,1,241,16.75Z"
			/>
			<motion.path
				variants={variantePath}
				d="M313,10.22a5.26,5.26,0,0,1-3.57-1.28,4.55,4.55,0,0,1-1.49-3.63,4.52,4.52,0,0,1,1.52-3.5A5.14,5.14,0,0,1,313,.44a5.29,5.29,0,0,1,3.44,1.24,4.45,4.45,0,0,1,1.5,3.63,4.6,4.6,0,0,1-1.46,3.61A5.11,5.11,0,0,1,313,10.22Zm4.46,7.15c.27,1.75.48,9.68.48,17.62s-.21,16-.48,18l-.95,1a4.74,4.74,0,0,1-3.62,1.54,4.5,4.5,0,0,1-3.57-1.58l-.92-1c-.25-1.9-.46-9.89-.46-17.75s.21-15.86.46-17.77l.92-1a4.6,4.6,0,0,1,3.57-1.5,4.78,4.78,0,0,1,3.62,1.5Z"
			/>
			<motion.path
				variants={variantePath}
				d="M389.35,53.87c-1.06-1.37-3.56-4.89-5.56-7.82s-5.3-2.93-7.34,0-4.61,6.48-5.7,7.88l-.75.64a4.23,4.23,0,0,1-2.83,1,4.76,4.76,0,0,1-3.25-1.19,3.59,3.59,0,0,1-1.33-2.73V50.55c1.13-1.9,4.08-6.37,6.57-9.94s2.72-8.91.51-11.88-4.95-6.9-6.09-8.73V18.68A3.51,3.51,0,0,1,364.82,16a4.68,4.68,0,0,1,3.26-1.13,4.31,4.31,0,0,1,2.91,1l.77.66c1.06,1.35,3.38,4.44,5.17,6.88s4.65,2.44,6.39,0,4-5.56,5.1-6.94l.77-.64a4.4,4.4,0,0,1,2.88-1A4.84,4.84,0,0,1,395.35,16a3.44,3.44,0,0,1,1.3,2.69,4.83,4.83,0,0,1-.53,2.18l-.36.69c-.7,1-3.08,4.21-5.29,7.18s-2,8.32.52,11.88,5.48,8.08,6.64,10v1a3.44,3.44,0,0,1-1.31,2.71,4.82,4.82,0,0,1-3.26,1.14,4.39,4.39,0,0,1-2.91-1Z"
			/>
		</motion.svg>
	);
};
