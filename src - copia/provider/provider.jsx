import { createContext, useState } from 'react';
import { data, setData } from './data';

export const DataContext = createContext();

const StoreProvider = ({ children }) => {
	const { data, setData }= useState(data);

	return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export default StoreProvider;
