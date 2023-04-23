import React, { useState, useContext } from 'react';

export const Contexto = ({ children }) => {
	const [ detallesUnidad, detallesUnidadE ] = useState(JSON.parse(localStorage.getItem('detalles')));
};
