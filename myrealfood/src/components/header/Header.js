import React from 'react';

import './Header.css';

export const Header = () => {
	return (
		<header className='header'>
			<h1 className='header-title'>Bienvenidx a la revolución </h1>
			<img
				className='logo'
				src='./assets/myrealfood_logo.png'
				alt='logoMyrealFood'
			/>
		</header>
	);
};
