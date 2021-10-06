import React, { useContext, useEffect, useState } from 'react';
import {
	HistorialContext,
	HistorialUpdateContext,
	ErrorContext,
	ErrorUpdateContext,
} from '../../../App';
import ScannedProduct from '../../components/ScannedProduct/ScannedProduct';
import createProductObject from '../../helpers/createProductObject';

import fetchProductJSON from '../../helpers/fetchProductJSON';

const ProductScreen = ({ route }) => {
	const historialList = useContext(HistorialContext);
	const error = useContext(ErrorContext);

	const setHistorialList = useContext(HistorialUpdateContext);
	const setError = useContext(ErrorUpdateContext);

	const productId = route.params?.id;
	const productIdHistorial = route.params?.idHistorial;

	const [product, setProduct] = useState('');

	const fetchData = async productId => {
		const productFromApi = await fetchProductJSON(productId);

		if (productFromApi === undefined) {
			setError(true);
			return;
		}

		const alreadyExists = historialList.filter(
			product => product._id === productFromApi._id
		);

		if (alreadyExists.length > 0) {
			setError(false);
			setProduct(alreadyExists[0]);
			return;
		} else {
			setError(false);
			const productCreated = createProductObject(productFromApi);
			setProduct(productCreated);
			setHistorialList([...historialList, productCreated]);
		}
	};

	useEffect(() => {
		if (productId) {
			fetchData(productId);
		}
	}, [productId]);

	useEffect(() => {
		const productFromHistorial = historialList.filter(
			product => product._id === productIdHistorial
		);
		setProduct(productFromHistorial[0]);
	}, [productIdHistorial]);

	return <ScannedProduct productToShow={product} error={error} />;
};

export default ProductScreen;
