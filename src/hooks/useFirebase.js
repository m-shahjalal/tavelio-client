import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [googleLoading, setGoogleLoading] = useState(false);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		setGoogleLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setError(null);
				setUser(result.user);
				setGoogleLoading(false);
			})
			.catch((error) => {
				setUser(null);
				setError(error.message);
				console.log(error);
				setGoogleLoading(false);
			});
	};

	const registerWithEmail = (email, password) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setError(null);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setUser(null);
				console.log(error);
				setLoading(false);
			});
	};

	const loginWithEmail = (email, password) => {
		setLoading(true);
		setError('');
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setError('');
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
				setUser(null);
				setLoading(false);
			});
	};

	const logout = () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser(null);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	return {
		user,
		error,
		loading,
		googleLoading,
		signInUsingGoogle,
		registerWithEmail,
		loginWithEmail,
		logout,
	};
};

export default useFirebase;
