import React from 'react';

import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Poppins_300Thin_Italic } from '@expo-google-fonts/dev';

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenidx a la revolución </Text>
			<Image
				style={styles.logo}
				source={require('../../../assets/myrealfood_logo.png')}
			/>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#25ab92',
		justifyContent: 'center',
		height: 280,
	},
	title: {
		fontSize: 23,
		color: 'white',
		fontFamily: Poppins_300Thin_Italic,
		marginTop: 20,
	},
	logo: {
		marginTop: 15,
		width: 250,
		height: 60,
	},
});
