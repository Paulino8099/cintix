import React, { useState, useEffect } from 'react';

// function Ejemplos() {
// 	const [ state, setState ] = useState({
// 		left: 0,
// 		top: 0,
// 		width: 100,
// 		height: 100
// 	});

// 	useEffect(() => {
// 		function handleWindowmouseMove(e) {
// 			setState((state) => ({ ...state, left: e.pageX, top: e.pageY }));
// 		}

// 		window.addEventListener('mousemove', () => {
// 			handleWindowmouseMove();
// 			console.log(state.left);
// 		});

// 		return () => {
// 			window.removeEventListener('mousemove', handleWindowmouseMove);
// 		};
// 	}, []);
// }
