const dataPrimary = {
	btnNavBar: false,
	darkMode: false,
	nameSection: '',
	backgroundOpacity: false,
	modalDetailsUnitToggle: false,
	backgroundOpacityFunction: '',
	idUnit: '',
	imgUnit: [],
	nameUnit: '',
	costUnit: '',
	listUnitsFavorites: [],
	test: false,
	btnBackUp: false,
};

export default dataPrimary

// export const data = () => {
// 	switch (action.type) {
// 		case 'darkMode': {
// 			return {
// 				...state,
// 				darkMode: !state.darkMode
// 			};
// 		}
// 		case 'unit': {
// 			return {
// 				...state,
// 				modalDetailsUnitToggle: true,
// 				backgroundOpacity: true,
// 				// backgroundOpacityFunction: () => {
// 				// 	...state,
// 				// 	backgroundOpacity: false,
// 				// 	modalDetailsUnitToggle: false

// 				// },
// 				imgUnit: action.payload.detalles.img,
// 				nameUnit: action.payload.detalles.nameUnit,
// 				costUnit: action.payload.detalles.costUnit,
// 				idUnit: `${action.payload.detalles.nameUnit}${action.payload.detalles.id}`,
// 				uniqueIdUnit: action.payload.detalles.id
// 			};
// 		}
// 		case 'opcionNavBar': {
// 			return {
// 				...state,
// 				nameSection: action.payload,
// 			};
// 		}
// 		case 'btnBackUp': {
// 			return {
// 				...state,
// 				btnBackUp: false,
// 			};
// 		}
// 		default:
// 			return state;
// 	}
// };

// export { intialStore };
// export default storeReducer;
