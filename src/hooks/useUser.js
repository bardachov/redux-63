import { useState } from 'react';

export const useUser = () => {
	const [jwt, setJWT] = useState(localStorage.getItem('jwt'));

	const localLogOut = () => {
		localStorage.removeItem('jwt');
		setJWT('');
	};

	const login = (token) => {
		localStorage.setItem('jwt', token);
		setJWT(token);
	};

	return {
		isAuth: !!jwt,
		jwt,
		localLogOut,
		login,
	};
};
