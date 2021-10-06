import React from 'react';

import HeaderElement from '../../components/Header/HeaderElement';

import { View, StyleSheet } from 'react-native';
import Scanner from '../../components/Scanner/Scanner';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderElement />
			<View style={styles.scannerContainer}>
				<Scanner
					sendScannedData={id =>
						navigation.navigate('ProductScreen', { id: id })
					}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	scannerContainer: {
		alignItems: 'center',
		marginTop: '5%',
	},
});
