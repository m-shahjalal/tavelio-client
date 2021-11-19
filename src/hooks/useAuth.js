import { useContext } from 'react';
import { Auth } from '../contexts/AuthContext';

const useAuth = () => useContext(Auth);

export default useAuth;
