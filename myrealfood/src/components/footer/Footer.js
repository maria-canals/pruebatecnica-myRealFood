import React from 'react';

import './Footer.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<span>Maria Canals ©{new Date().getFullYear()} </span>
		</footer>
	);
};
