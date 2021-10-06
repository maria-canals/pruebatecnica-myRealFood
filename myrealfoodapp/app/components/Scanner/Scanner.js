import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = ({ sendScannedData }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	const askForCameraPermission = () => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	};

	useEffect(() => {
		askForCameraPermission();
	}, []);

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		sendScannedData(data);
	};

	if (hasPermission === null) {
		return (
			<View style={styles.container}>
				<Text>Pidiendo permiso a la camara...</Text>
			</View>
		);
	}
	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text style={{ margin: 10 }}>Sin acceso a la camara</Text>
				<Button
					title={'Permitir camara'}
					onPress={() => {
						askForCameraPermission();
					}}
				/>
			</View>
		);
	}

	return (
		<>
			<View style={styles.barcodebox}>
				<BarCodeScanner
					style={{ height: 400, width: 400 }}
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
				/>
			</View>
			<View>
				{scanned ? (
					<Button
						title={'Volver a escanear'}
						onPress={() => setScanned(false)}
					/>
				) : (
					<Text>Escanea el código de barras</Text>
				)}
			</View>
		</>
	);
};

export default Scanner;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	barcodebox: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
		width: 300,
		overflow: 'hidden',
		borderRadius: 30,
		backgroundColor: 'tomato',
	},
});
