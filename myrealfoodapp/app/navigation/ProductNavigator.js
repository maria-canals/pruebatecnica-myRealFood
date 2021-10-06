import ProductScreen from '../screens/Product/ProductScreen';

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistorialScreen from '../screens/Historial/HistorialScreen';

const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => {
	return (
		<ProductStack.Navigator>
			<ProductStack.Screen
				name='HistorialScreen'
				component={HistorialScreen}
				options={{ headerShown: false }}
			/>
			<ProductStack.Screen
				name='ProductScreen'
				component={ProductScreen}
				options={{ title: '', headerBackTitle: 'Atrás' }}
			/>
		</ProductStack.Navigator>
	);
};

export default ProductStackScreen;
