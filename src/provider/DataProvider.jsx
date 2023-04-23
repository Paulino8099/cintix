import { createContext, useState } from 'react';
import dataPrimary from './data'

export const DataContext = createContext();

const StoreProvider = ({ children }) => {
	const [ data, setData ] = useState(dataPrimary);

	return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export default StoreProvider;
