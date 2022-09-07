import React from 'react';
import estilosCabecera from '../../scss/cabecera.module.scss';
import { ArranqueModoOscuro } from 'componentes/menu-nagevacion/arranque-modoOscuro';
import { motion } from 'framer-motion';
import { SvgTitulo } from './titulo-cabecera';
import { FlorCabecera } from './flor-cabecera';

export function Cabecera() {
	ArranqueModoOscuro()
	return (
		<motion.header className={estilosCabecera.cabecera} id="cabecera">
			{/* titulo svg */}
			<SvgTitulo clase={estilosCabecera.titulo_cabecera} />
			{/* imagen principal */}
			<img className={estilosCabecera.imagenFondo_cabecera} src="./img/svg/fondo-cabecera.svg" alt="" />
			{/* flor svg */}
			<FlorCabecera clase={estilosCabecera.flor_cabecera} />
			{/* <img className={estilosCabecera.flor_cabecera} src="./img/svg/flor.svg" alt="" /> */}
			{/* 3 flores */}
			<span className={estilosCabecera.tresFlores_cabecera}>
				<motion.img
					animate={{
						animationDelay: '1s'
					}}
					src="./img/svg/flor1.svg"
					alt=""
				/>
				<motion.img
					animate={{
						animationDelay: '2s'
					}}
					src="./img/svg/flor2.svg"
					alt=""
				/>
				<motion.img
					animate={{
						animationDelay: '3s'
					}}
					src="./img/svg/flor3.svg"
					alt=""
				/>
			</span>
		</motion.header>
	);
}
