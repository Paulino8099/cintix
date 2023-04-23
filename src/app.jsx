import { Cabecera } from 'components/cabecera/cabecera';
import DataProvider from 'provider/DataProvider';
import { NavBar } from 'components/menu-nagevacion/NavBar';
import { Contacto } from 'components/contacto/contacto';
import { PiePagina } from 'components/pie-pagina/pie-pagina';
import { MenuFlotante } from 'components/menu-flotante/FloatMain';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/secciones/sectionCintix/Section';
import { Title } from 'components/secciones/universal/title/Title';
import { Units } from 'components/secciones/sectionCintix/units/Units';
import { Unit } from 'components/secciones/universal/unit/Unit';
import { BackgroundOpacity } from 'components/BackgroundOpacity';
import { DetailsUnit } from 'components/DetailsUnit/DetailsUnit';
import listUnitsCintillos from './components/secciones/sectionCintix/units/listUnitsCintillos';
import listUnitsGanchos from './components/secciones/sectionCintix/units/listUnitsGanchos';
import listUnitsVendas from './components/secciones/sectionCintix/units/listUnitsVendas';

export function App() {
	return (
		<DataProvider>
			<DetailsUnit />
			<NavBar />
			<Cabecera />
			<Section idSeccion="cintillos">
				<Title id="cintillos" mitadTitulo1="Cint" mitadTitulo2="illos" />
				<Units>
					{listUnitsCintillos.map((item) => (
						<Unit
							color={item.color}
							img={item.img}
							id={item.id}
							costUnit={item.costUnit}
							nameUnit={item.nameUnit}
						/>
					))}
				</Units>
			</Section>
			<Section idSeccion="ganchos">
				<Title id="ganchos" mitadTitulo1="Gan" mitadTitulo2="chos" />
				<Units>
					{listUnitsGanchos.map((item) => (
						<Unit
							color={item.color}
							img={item.img}
							id={item.id}
							costUnit={item.costUnit}
							nameUnit={item.nameUnit}
						/>
					))}
				</Units>
			</Section>
			<Section idSeccion="vendas">
				<Title id="vendas" mitadTitulo1="Ven" mitadTitulo2="das" />
				<Units>
					{listUnitsVendas.map((item) => (
						<Unit
							color={item.color}
							img={item.img}
							id={item.id}
							costUnit={item.costUnit}
							nameUnit={item.nameUnit}
						/>
					))}
				</Units>
			</Section>
			<Contacto />
			<PiePagina />
			<MenuFlotante />
			<BackgroundOpacity />
			{/* <Outlet /> */}
		</DataProvider>
	);
}
