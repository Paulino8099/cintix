import { Cabecera } from 'components/cabecera/cabecera';
import StoreProvider from 'provider/DataProvider';
import { NavBar } from 'components/menu-nagevacion/NavBar';
import { Contacto } from 'components/contacto/contacto';
import { PiePagina } from 'components/pie-pagina/pie-pagina';
import { MenuFlotante } from 'components/menu-flotante/FloatMain';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/sectiones/sectionCintix/Section';
import { Title } from 'components/sectiones/universal/title/Title';
import { Units } from 'components/sectiones/sectionCintix/units/Units';
import { Unit } from 'components/sectiones/universal/unit/Unit';
import { BackgroundOpacity } from 'components/BackgroundOpacity';
import { DetailsUnit } from 'components/DetailsUnit/DetailsUnit';

export function App() {
	return (
		<StoreProvider>
			<DetailsUnit />
			<NavBar />
			<Cabecera />
			<Section idSeccion="cintillos">
				<Title id="cintillos" mitadTitulo1="Cint" mitadTitulo2="illos" />
				<Units>
					<Unit
						detalles={{
							cost: '$75.00',
							img: './img/svg/Azúl/1.svg',
							nombre: 'Cintillo Azúl-Royal',
							seccion: 'Cintillo',
							color: 'Azúl-Royal',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 1
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Azúl-Royal con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Azúl-Royal con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 2
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Morado-Lila',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Morado-Lila',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 3
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Morado-Lila con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Morado-Lila con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 4
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Negro con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Negro con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 5
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Rojo-Vino',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Rojo-Vino',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 6
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Rojo-Vino con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Rojo-Vino con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 7
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Rosado',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Rosado',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 8
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 9
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 10
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 11
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 12
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 13
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 14
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 15
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 16
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 17
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Cintillo Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Cintillo',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Cintillo',
							id: 18
						}}
					/>
				</Units>
			</Section>
			<Section idSeccion="ganchos">
				<Title id="ganchos" mitadTitulo1="Gan" mitadTitulo2="chos" />
				<Units>
					<Unit
						detalles={{
							cost: '$75.00',
							img: './img/svg/Azúl/1.svg',
							nombre: 'Cintillo Azúl-Royal',
							seccion: 'Ganchos',
							color: 'Azúl-Royal',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 1
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Azúl-Royal con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Azúl-Royal con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 2
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Morado-Lila',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Morado-Lila',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 3
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Morado-Lila con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Morado-Lila con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 4
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Negro con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Negro con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 5
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Rojo-Vino',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Rojo-Vino',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 6
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Rojo-Vino con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Rojo-Vino con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 7
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Rosado',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Rosado',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 8
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 9
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 10
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 11
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 12
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 13
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 14
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 15
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 16
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 17
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Ganchos Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Ganchos',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Ganchos',
							id: 18
						}}
					/>
				</Units>
			</Section>
			<Section idSeccion="vendas">
				<Title id="vendas" mitadTitulo1="Ven" mitadTitulo2="das" />
				<Units>
					<Unit
						detalles={{
							cost: '$75.00',
							img: './img/svg/Azúl/1.svg',
							nombre: 'Vendas Azúl-Royal',
							seccion: 'Vendas',
							color: 'Azúl-Royal',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 1
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Azúl-Royal con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Azúl-Royal con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 2
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Morado-Lila',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Morado-Lila',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 3
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Morado-Lila con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Morado-Lila con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 4
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Negro con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Negro con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 5
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Rojo-Vino',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Rojo-Vino',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 6
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Rojo-Vino con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Rojo-Vino con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 7
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Rosado',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Rosado',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 8
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 9
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 10
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 11
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 12
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 13
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 14
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 15
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 16
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 17
						}}
					/>
					<Unit
						detalles={{
							cost: '$75.00',
							nombre: 'Vendas Verde-Cotorra con Blanco',
							img: './img/svg/Azúl/1.svg',
							seccion: 'Vendas',
							color: 'Verde-Cotorra con Blanco',
							estilo: 'Flor Pullita',
							unidad: 'Vendas',
							id: 18
						}}
					/>
				</Units>
			</Section>
			<Contacto />
			<PiePagina />
			<MenuFlotante />
			<BackgroundOpacity />
			{/* <Outlet /> */}
		</StoreProvider>
	);
}
