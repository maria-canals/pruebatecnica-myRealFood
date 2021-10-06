import React from 'react';

import './Product.css';
import buildTableData from '../../helpers/buildTableData';

export const Product = ({ product }) => {
	const tableData = [];

	tableData.push(
		buildTableData({
			title: 'Valor energético',
			arrValues: [
				product.nutriments.energeticValueGrams,
				product.nutriments.energeticValueUnit,
				'/',
				product.nutriments.energeticValueKCal,
				product.nutriments.energeticValueKCUnit,
			],
		}),
		buildTableData({
			title: 'Grasas',
			arrValues: [product.nutriments.fatValue, product.nutriments.fatUnit],
		}),
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
			arrValues: [product.nutriments.sugarValue, product.nutriments.sugarUnit],
		}),
		buildTableData({
			title: 'Fibra',
			arrValues: [product.nutriments.fiberValue, product.nutriments.fiberUnit],
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
	return (
		<div className='product-container'>
			<div className='product-image-container'>
				<div className='product-image-container-inner'>
					<img
						className='product-image'
						src={product.image}
						alt={product.name}
					/>
				</div>
			</div>
			<div className='product-info'>
				<h4>{product.name}</h4>
				<span>{product.brand}</span>
				<hr />
				<h5>Ingredientes</h5>
				<div className='ingredients-container'>
					{product.ingredients
						? product.ingredients.map((ingredient, index) => (
								<div className='ingredient-tag' key={index}>
									{ingredient}{' '}
								</div>
						  ))
						: ''}
				</div>
				<hr />
				<table className='table'>
					<thead>
						<tr>
							<th>Información nutricional</th>
							<th>por {product.nutritionDataPer}</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map(data => {
							return (
								<tr key={data.title}>
									<td className='table-keys'>{data.title}</td>
									<td className='table-values'>{data.value}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
