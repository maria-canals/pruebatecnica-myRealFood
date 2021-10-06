import React from 'react';

import './Historial.css';

export const Historial = ({ historialList, handleOnClick }) => {
	return (
		<section className='historial'>
			<h1 className='historial-title'>Productos buscados recientemente</h1>

			<div>
				{historialList.length > 0 ? (
					historialList.map(product => (
						<div
							onClick={() => handleOnClick(product._id)}
							key={product._id}
							className='historial-element'>
							<img
								className='historial-element-image'
								src={product.image}
								alt={product.name}
							/>
							<p className='historial-element-name'>
								{product.name || product.brand}
							</p>
						</div>
					))
				) : (
					<span>No hay historial todavía</span>
				)}
			</div>
		</section>
	);
};
