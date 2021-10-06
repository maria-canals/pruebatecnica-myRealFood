import React from 'react';

import './Searchbar.css';

export const Searchbar = ({ onChange, onSubmit, value }) => {
	return (
		<>
			<div className='searchBar-container'>
				<form className='searchBar-form' onSubmit={onSubmit}>
					<input
						required
						className='field'
						type='text'
						name='name'
						maxLength={13}
						minLength={13}
						value={value}
						placeholder='Introduce el código de barras (13 números)'
						onChange={onChange}
					/>
					<input className='submitBtn' type='submit' value='Buscar' />
				</form>
			</div>
		</>
	);
};
