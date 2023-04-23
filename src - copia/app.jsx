import { Cabecera } from './components/cabecera/cabecera';
import StoreProvider from 'provider/DataProvider';
import { MenuNavegacion } from 'components/menu-nagevacion/NavBar';
import { Contacto } from 'components/contacto/contacto';
import { PiePagina } from 'components/pie-pagina/pie-pagina';
import { MenuFlotante } from 'components/menu-flotante/FloatMain';
import { LogoFlotante } from 'components/LogoFloating/LogoFloating';
import { Outlet } from 'react-router-dom';
import { SectionCintix } from 'components/sectiones/sectionCintix/Section';

export function App() {
	return (
		<StoreProvider>
			<MenuNavegacion />
			<Cabecera />
			<SectionCintix
				idSeccion={'cintillos'}
				mitadTitulo1={'Cint'}
				mitadTitulo2={'illos'}
				comentarioPrincipal={
					'Un cintillo puede brindarte esa combinación perfecta entre el vestuario y sus accesorios.'
				}
			/>
			<Contacto />
			<PiePagina />
			<MenuFlotante />
			<LogoFlotante />
			<Outlet />
		</StoreProvider>
	);
}
