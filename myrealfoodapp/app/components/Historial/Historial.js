import React from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Screen from '../Screen/Screen';

const Historial = ({ onPress, historialList }) => {
	return (
		<Screen style={styles.historial}>
			<ScrollView>
				<Text style={styles.title}>Productos buscados recientemente</Text>
				{historialList.length > 0 ? (
					historialList.map(product => (
						<TouchableOpacity
							key={product._id}
							onPress={() => onPress(product._id)}>
							<View style={styles.historialElement}>
								<Image
									style={styles.historialElementImage}
									source={{
										uri: product.image,
									}}
									alt={product.name}
								/>
								<Text style={styles.historialElementText}>
									{product.name || product.brand}
								</Text>
							</View>
						</TouchableOpacity>
					))
				) : (
					<Text>No hay historial todavía</Text>
				)}
			</ScrollView>
		</Screen>
	);
};

export default Historial;

const styles = StyleSheet.create({
	historial: {
		flexDirection: 'column',
		padding: 10,
	},
	historialElement: {
		margin: 20,
		flexDirection: 'row',
	},
	historialElementImage: {
		width: 100,
		borderRadius: 5,
		height: 100,
	},
	historialElementText: {
		marginLeft: 20,
		marginTop: 40,
	},
	title: {
		textAlign: 'center',
		margin: 20,
	},
});
