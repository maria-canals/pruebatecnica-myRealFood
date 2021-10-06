import React, { createContext, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/navigation/MainNavigator';
export const HistorialContext = createContext();
export const ErrorContext = createContext();

export const HistorialUpdateContext = createContext();
export const ErrorUpdateContext = createContext();

export default function App() {
	const [historialList, setHistorialList] = useState([]);
	const [error, setError] = useState(false);

	return (
		<HistorialContext.Provider value={historialList}>
			<HistorialUpdateContext.Provider value={setHistorialList}>
				<ErrorContext.Provider value={error}>
					<ErrorUpdateContext.Provider value={setError}>
						<View style={styles.container}>
							<NavigationContainer>
								<MainNavigator />
							</NavigationContainer>
						</View>
					</ErrorUpdateContext.Provider>
				</ErrorContext.Provider>
			</HistorialUpdateContext.Provider>
		</HistorialContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
