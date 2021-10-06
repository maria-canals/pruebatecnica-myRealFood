import { useState } from 'react';

import { Header } from './components/header/Header';
import { Product } from './components/product/Product';
import { Historial } from './components/historial/Historial';
import { Searchbar } from './components/searchbar/Searchbar';
import { Footer } from './components/footer/Footer';

import './App.css';

import fetchProductJSON from './helpers/fetchProductJSON';
import createProductObject from './helpers/createProductObject';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [product, setProduct] = useState('');
	const [historialList, setHistorialList] = useState([]);
	const [error, setError] = useState('');

	const handleChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const productFromAPI = await fetchProductJSON(inputValue);
		if (productFromAPI === undefined) {
			setError('No hemos encontrado el producto, pruebe con otro');
			setInputValue('');

			return;
		}

		const alreadyExists = historialList.filter(
			product => product._id === productFromAPI._id
		);

		if (alreadyExists.length > 0) {
			setError('');
			setProduct(alreadyExists[0]);
			return;
		} else {
			setError('');
			const product = createProductObject(productFromAPI);
			setProduct(product);
			setHistorialList([...historialList, product]);
			setInputValue('');
		}
	};

	const handleOnClickHistorialProduct = id => {
		setError('');
		const historialListElement = historialList.filter(
			product => product._id === id
		);
		setProduct(historialListElement[0]);
	};

	return (
		<div className='container'>
			<Header className='header' />

			<Historial
				historialList={historialList}
				className='historial'
				handleOnClick={handleOnClickHistorialProduct}
			/>

			<main className='main'>
				<div className='main-container'>
					<Searchbar
						inputValue
						onSubmit={handleSubmit}
						onChange={handleChange}
						value={inputValue}
					/>

					{error ? (
						<span style={{ marginLeft: '1.5rem' }}>{error}</span>
					) : (
						product && <Product product={product} />
					)}
				</div>
			</main>

			<Footer className='footer' />
		</div>
	);
}

export default App;
