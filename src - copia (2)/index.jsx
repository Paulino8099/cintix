import React from 'react';
import ReactDOM from 'react-dom';
import estilos from 'index.module.scss'
import { App } from 'app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				{/* <Route path="detallesUnidad" element={<DetallesUnidad />} /> */}
				{/* <Route path="*" element={<Error404 />} /> */}
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('body')
);
