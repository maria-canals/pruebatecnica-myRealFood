import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreen';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name='ProductScreen'
				component={ProductScreen}
				options={{
					title: '',
					headerBackTitle: 'Atrás',
				}}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
