import React, { useContext } from 'react';
import { HistorialContext } from '../../../App';
import Historial from '../../components/Historial/Historial';
import Screen from '../../components/Screen/Screen';

const HistorialScreen = ({ navigation }) => {
	const historialList = useContext(HistorialContext);

	return (
		<Screen style={{ backgroundColor: 'white' }}>
			<Historial
				historialList={historialList}
				onPress={productId =>
					navigation.navigate('ProductScreen', { idHistorial: productId })
				}
			/>
		</Screen>
	);
};

export default HistorialScreen;
