import React from 'react';
import Logo from './components/Logo/Logo';

import './Header.css';

const Header = () => {
	return (
		<div className='container mt-4'>
			<header className='row pt-2 pb-2'>
				<div className='col'>
					<Logo />
				</div>
			</header>
		</div>
	);
};

export default Header;
