import React from 'react';
import estilosPiePagina from '../../scss/pie-pagina.module.scss';
import { Tecnologia } from '../pie-pagina/tecnologia';
import { FaReact, FaJsSquare, FaSass, FaCss3, FaNodeJs, FaHtml5, FaCopyright, FaPaintRoller } from 'react-icons/fa';
import { DiPhotoshop, DiIllustrator, DiVisualstudio } from 'react-icons/di';

export function PiePagina() {
	return (
		<footer className={estilosPiePagina.PiePagina}>
			{/* Tecnologia usada */}
			<div className={estilosPiePagina.tecnologia_PiePagina}>
				<h1>Tecnologías usadas para la construcción de este sitio Web:</h1>
				<ul>
					<Tecnologia
						className={estilosPiePagina.react_piePagina}
						id="1"
						href={'https://es.reactjs.org/'}
						logo={<FaReact />}
						subtitulo="React"
					/>
					<Tecnologia
						className={estilosPiePagina.js_piePagina}
						id="2"
						href={'https://www.javascript.com/'}
						logo={<FaJsSquare />}
						subtitulo="JavaScript"
					/>
					<Tecnologia
						className={estilosPiePagina.html5_piePagina}
						id="3"
						href={'https://es.wikipedia.org/wiki/HTML5'}
						logo={<FaHtml5 />}
						subtitulo="Html 5"
					/>
					<Tecnologia
						className={estilosPiePagina.scss_piePagina}
						id="4"
						href={'https://es.wikipedia.org/wiki/Sass'}
						logo={<FaSass />}
						subtitulo="Sass"
					/>

					<Tecnologia
						className={estilosPiePagina.css3_piePagina}
						id="5"
						href={'https://es.wikipedia.org/wiki/CSS'}
						logo={<FaCss3 />}
						subtitulo="Css 3"
					/>
					<Tecnologia
						className={estilosPiePagina.nodeJs_piePagina}
						id="6"
						href={'https://nodejs.org/es/'}
						logo={<FaNodeJs />}
						subtitulo="Node JS"
					/>
					<Tecnologia
						className={estilosPiePagina.vsCode_piePagina}
						id="7"
						href={'https://nodejs.org/es/'}
						logo={<DiVisualstudio />}
						subtitulo="VS Code"
					/>
					<Tecnologia
						className={estilosPiePagina.photoshop_piePagina}
						id="8"
						href={'https://nodejs.org/es/'}
						logo={<DiPhotoshop />}
						subtitulo="Photoshop"
					/>
					<Tecnologia
						className={estilosPiePagina.illustrator_piePagina}
						id="9"
						href={'https://nodejs.org/es/'}
						logo={<DiIllustrator />}
						subtitulo="Illustrator"
					/>
				</ul>
			</div>
			{/* derechos de autor */}
			<div className={estilosPiePagina.derechosAutor}>
				<span>
					<FaCopyright />
					<p>
						Todos los derechos reservados <a href="#1">•2022</a>
					</p>
				</span>
				<span>
					<FaPaintRoller />
					<p>
						Página web construída a base de tecnología moderna. Construída por{' '}
						<a href="#1">•David Paulino</a>.
					</p>
				</span>
			</div>
		</footer>
	);
}
