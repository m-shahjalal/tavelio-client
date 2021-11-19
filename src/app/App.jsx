import AuthWrapper from '../contexts/AuthContext';
import firebaseInitialize from '../firebase/firebase.initialize';
import './App.css';
import Router from './Router';

firebaseInitialize();

const App = () => {
	return (
		<AuthWrapper>
			<Router />
		</AuthWrapper>
	);
};

export default App;
