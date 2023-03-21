import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { useUser } from '../../hooks/useUser';
import Logo from './components/Logo/Logo';
import axios from 'axios';

import './Header.css';

const Header = () => {
	const navigate = useNavigate();
	const { isAuth, jwt, localLogOut } = useUser();

	const handlerLogout = () => {
		axios
			.delete('/logout', {
				headers: {
					Authorization: jwt,
				},
			})
			.then((res) => {
				console(res);
				// localStorage.removeItem('jwt');
			})
			.catch((error) => {
				// const { data } = error.response;
				console.log(error.response);
			})
			.finally((data) => {
				console.log(data);
				localLogOut();
			});
	};

	return (
		<div className='container mt-4'>
			<header className='row pt-2 pb-2'>
				<div className='col'>
					<Logo />
				</div>

				{!isAuth && (
					<div className='col text-end'>
						<Button
							buttonText='Login'
							buttonId='login'
							onClick={() => {
								navigate('/user/login');
							}}
						/>
						<Button
							buttonText='Registration'
							buttonId='registration'
							onClick={() => {
								navigate('/user/registration');
							}}
						/>
					</div>
				)}
				{isAuth && (
					<div className='col text-end'>
						<Button buttonText='Hello' buttonId='hello' disabled={true} />
						<Button
							buttonText='Logout'
							buttonId='logout'
							onClick={handlerLogout}
						/>
					</div>
				)}
			</header>
		</div>
	);
};

export default Header;
