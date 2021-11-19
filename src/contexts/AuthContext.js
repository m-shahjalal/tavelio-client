import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Auth = createContext();

const AuthContext = ({ children }) => {
	const authState = useFirebase();
	return <Auth.Provider value={authState}>{children}</Auth.Provider>;
};

export default AuthContext;
