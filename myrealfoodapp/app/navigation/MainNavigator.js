import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackScreen from './HomeNavigator';
import ProductStackScreen from './ProductNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Escanear'
				component={HomeStackScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name='barcode-scan'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Historial'
				component={ProductStackScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name='content-save-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainNavigator;
