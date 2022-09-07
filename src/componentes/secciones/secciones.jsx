import { Seccion } from 'componentes/seccion/seccion';
import { Unidad } from 'componentes/unidad/unidad';
import { Fragment } from 'react';

export function Seciones() {
	return (
		<sections>
			{/* seccion para los Cintillos */}
			<Seccion
				idSeccion={'Cintillos'}
				mitadTitulo1={'Cint'}
				mitadTitulo2={'illos'}
				comentarioPrincipal={
					'Un cintillo puede brindarte esa combinación perfecta entre el vestuario y sus accesorios.'
				}
				unidad={
					<Fragment>
						<Unidad
							imgUnidad="./img/svg/flor1.svg"
							id="1"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Rojo', estilo: 'pullita', unidad: 'Cintillo', id: 1 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor2.svg"
							id="2"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Amarillo', estilo: 'pullita', unidad: 'Cintillo', id: 2 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor3.svg"
							id="3"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Morado', estilo: 'pullita', unidad: 'Cintillo', id: 3 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor4.svg"
							id="4"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Azúl-Cian', estilo: 'pullita', unidad: 'Cintillo', id: 4 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor5.svg"
							id="5"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Marron', estilo: 'pullita', unidad: 'Cintillo', id: 5 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor6.svg"
							id="6"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Negro', estilo: 'pullita', unidad: 'Cintillo', id: 6 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor7.svg"
							id="7"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Azúl', estilo: 'pullita', unidad: 'Cintillo', id: 7 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor8.svg"
							id="8"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Verde-Limón', estilo: 'pullita', unidad: 'Cintillo', id: 8 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor9.svg"
							id="9"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Rojo-Oscuro', estilo: 'pullita', unidad: 'Cintillo', id: 9 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor10.svg"
							id="10"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Verde-Oscuro', estilo: 'pullita', unidad: 'Cintillo', id: 10 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor11.svg"
							id="11"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Rosado', estilo: 'pullita', unidad: 'Cintillo', id: 11 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor12.svg"
							id="12"
							subtitulo={'Cintillo'}
							detalles={{ color: 'Rojo-Vino', estilo: 'pullita', unidad: 'Cintillo', id: 12 }}
						/>
					</Fragment>
				}
			/>
			{/* seccion para los ganchos */}
			<Seccion
				idSeccion={'Ganchos'}
				mitadTitulo1={'Gan'}
				mitadTitulo2={' chos'}
				comentarioPrincipal={
					'Un Gancho puede brindarte esa combinación perfecta entre el vestuario y sus accesorios.'
				}
				unidad={
					<Fragment>
						<Unidad
							imgUnidad="./img/svg/flor1.svg"
							id="1"
							subtitulo={'Gancho'}
							detalles={{ color: 'Rojo', estilo: 'Flor Pullita', unidad: 'Gancho', id: 1 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor2.svg"
							id="2"
							subtitulo={'Gancho'}
							detalles={{ color: 'Amarillo', estilo: 'Flor Pullita', unidad: 'Gancho', id: 2 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor3.svg"
							id="3"
							subtitulo={'Gancho'}
							detalles={{ color: 'Morado', estilo: 'Flor Pullita', unidad: 'Gancho', id: 3 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor4.svg"
							id="4"
							subtitulo={'Gancho'}
							detalles={{ color: 'Azúl-Cian', estilo: 'Flor Pullita', unidad: 'Gancho', id: 4 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor5.svg"
							id="5"
							subtitulo={'Gancho'}
							detalles={{ color: 'Marron', estilo: 'Flor Pullita', unidad: 'Gancho', id: 5 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor6.svg"
							id="6"
							subtitulo={'Gancho'}
							detalles={{ color: 'Negro', estilo: 'Flor Pullita', unidad: 'Gancho', id: 6 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor7.svg"
							id="7"
							subtitulo={'Gancho'}
							detalles={{ color: 'Azúl', estilo: 'Flor Pullita', unidad: 'Gancho', id: 7 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor8.svg"
							id="8"
							subtitulo={'Gancho'}
							detalles={{ color: 'Verde-Limón', estilo: 'Flor Pullita', unidad: 'Gancho', id: 8 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor9.svg"
							id="9"
							subtitulo={'Gancho'}
							detalles={{ color: 'Rojo-Oscuro', estilo: 'Flor Pullita', unidad: 'Gancho', id: 9 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor10.svg"
							id="10"
							subtitulo={'Gancho'}
							detalles={{ color: 'Verde-Oscuro', estilo: 'Flor Pullita', unidad: 'Gancho', id: 10 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor11.svg"
							id="11"
							subtitulo={'Gancho'}
							detalles={{ color: 'Rosado', estilo: 'Flor Pullita', unidad: 'Gancho', id: 11 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor12.svg"
							id="12"
							subtitulo={'Gancho'}
							detalles={{ color: 'Rojo-Vino', estilo: 'Flor Pullita', unidad: 'Gancho', id: 12 }}
						/>
					</Fragment>
				}
			/>
			{/* seccion para los Vendas */}
			<Seccion
				idSeccion={'Vendas'}
				mitadTitulo1={'Ven'}
				mitadTitulo2={' das'}
				comentarioPrincipal={
					'Un Vendas puede brindarte esa combinación perfecta entre el vestuario y sus accesorios.'
				}
				unidad={
					<Fragment>
						<Unidad
							imgUnidad="./img/svg/flor1.svg"
							id="1"
							subtitulo={'Venda'}
							detalles={{ color: 'Rojo', estilo: 'Flor Pullita', unidad: 'Venda', id: 1 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor2.svg"
							id="2"
							subtitulo={'Venda'}
							detalles={{ color: 'Amarillo', estilo: 'Flor Pullita', unidad: 'Venda', id: 2 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor3.svg"
							id="3"
							subtitulo={'Venda'}
							detalles={{ color: 'Morado', estilo: 'Flor Pullita', unidad: 'Venda', id: 3 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor4.svg"
							id="4"
							subtitulo={'Venda'}
							detalles={{ color: 'Azúl-Cian', estilo: 'Flor Pullita', unidad: 'Venda', id: 4 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor5.svg"
							id="5"
							subtitulo={'Venda'}
							detalles={{ color: 'Marron', estilo: 'Flor Pullita', unidad: 'Venda', id: 4 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor6.svg"
							id="6"
							subtitulo={'Venda'}
							detalles={{ color: 'Negro', estilo: 'Flor Pullita', unidad: 'Venda', id: 6 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor7.svg"
							id="7"
							subtitulo={'Venda'}
							detalles={{ color: 'Azúl', estilo: 'Flor Pullita', unidad: 'Venda', id: 7 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor8.svg"
							id="8"
							subtitulo={'Venda'}
							detalles={{ color: 'Verde-Limón', estilo: 'Flor Pullita', unidad: 'Venda', id: 8 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor9.svg"
							id="9"
							subtitulo={'Venda'}
							detalles={{ color: 'Rojo-Oscuro', estilo: 'Flor Pullita', unidad: 'Venda', id: 9 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor10.svg"
							id="10"
							subtitulo={'Venda'}
							detalles={{ color: 'Verde-Oscuro', estilo: 'Flor Pullita', unidad: 'Venda', id: 10 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor11.svg"
							id="11"
							subtitulo={'Venda'}
							detalles={{ color: 'Rosado', estilo: 'Flor Pullita', unidad: 'Venda', id: 11 }}
						/>
						<Unidad
							imgUnidad="./img/svg/flor12.svg"
							id="12"
							subtitulo={'Venda'}
							detalles={{ color: 'Rojo-Vino', estilo: 'Flor Pullita', unidad: 'Venda', id: 12 }}
						/>
					</Fragment>
				}
			/>
		</sections>
	);
}
