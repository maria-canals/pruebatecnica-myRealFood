import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import buildTableData from '../../helpers/buildTableData';

import Screen from '../Screen/Screen';

const ScannedProduct = ({ productToShow, error }) => {
	const product = productToShow;
	const tableData = [];
	if (product) {
		tableData.push(
			buildTableData({
				title: 'de las cuales saturadas',
				arrValues: [
					product.nutriments.fatSaturatedValue,
					product.nutriments.fatSaturatedUnit,
				],
			}),
			buildTableData({
				title: 'Hidratos de carbono',
				arrValues: [
					product.nutriments.carbohydratesValue,
					product.nutriments.carbohydratesUnit,
				],
			}),
			buildTableData({
				title: 'de los cuales azúcares',
				arrValues: [
					product.nutriments.sugarValue,
					product.nutriments.sugarUnit,
				],
			}),
			buildTableData({
				title: 'Fibra',
				arrValues: [
					product.nutriments.fiberValue,
					product.nutriments.fiberUnit,
				],
			}),
			buildTableData({
				title: 'Proteinas',
				arrValues: [
					product.nutriments.proteinsValue,
					product.nutriments.proteinsUnit,
				],
			}),
			buildTableData({
				title: 'Sal',
				arrValues: [product.nutriments.saltValue, product.nutriments.saltUnit],
			})
		);
	}

	return (
		<Screen style={[styles.container, { backgroundColor: 'white' }]}>
			<ScrollView>
				{product ? (
					<>
						<View style={styles.imageContainer}>
							<Image
								style={styles.image}
								source={{
									uri: product.image,
								}}
							/>
						</View>
						<View style={styles.productInfoContainer}>
							<Text style={styles.title}>{product.name}</Text>
							<Text style={styles.title}>{product.brand}</Text>
							<Text style={styles.title}>Ingredientes</Text>

							<View style={styles.ingredientsContainer}>
								{product.ingredients
									? product.ingredients.map((ing, index) => (
											<Text key={index} style={styles.ingredientTag}>
												{ing}
											</Text>
									  ))
									: '--'}
							</View>

							<DataTable style={styles.table}>
								<DataTable.Header>
									<DataTable.Title>
										<Text style={styles.tableTitle}>
											Información nutricional
										</Text>
									</DataTable.Title>
									<DataTable.Title>
										<Text style={styles.tableTitle}>
											por {product.nutritionDataPer}
										</Text>
									</DataTable.Title>
								</DataTable.Header>

								{tableData.map(data => {
									return (
										<DataTable.Row key={data.title}>
											<DataTable.Cell>
												<Text style={styles.rowTextOne}>{data.title}</Text>
											</DataTable.Cell>
											<DataTable.Cell style={styles.tableRow}>
												<Text style={styles.rowTextTwo}> {data.value}</Text>
											</DataTable.Cell>
										</DataTable.Row>
									);
								})}
							</DataTable>
						</View>
					</>
				) : (
					<View>
						{error ? (
							<Text>No se ha encontrado el producto. Prueba con otro.</Text>
						) : (
							<Text>Cargando datos...</Text>
						)}
					</View>
				)}
			</ScrollView>
		</Screen>
	);
};

export default ScannedProduct;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	productInfoContainer: {
		marginLeft: 20,
	},
	imageContainer: {
		alignItems: 'center',
		marginTop: 10,
	},
	ingredientsContainer: {
		width: '95%',
		flexWrap: 'wrap',
		marginBottom: 5,
		flexDirection: 'row',
	},
	image: {
		height: 200,
		width: 200,
		borderRadius: 10,
	},
	ingredientTag: {
		backgroundColor: '#f2ebeb',
		width: 'auto',
		margin: 5,
		padding: 10,
		borderRadius: 5,
		fontSize: 11,
	},
	title: {
		fontWeight: '700',
		margin: 10,
	},
	tableTitle: { fontSize: 10 },
	tableRow: {
		marginLeft: 10,
	},
	rowTextOne: {
		fontSize: 10,
	},
	rowTextTwo: {
		fontSize: 11,
		flexWrap: 'wrap',
		textAlign: 'center',
	},
});
