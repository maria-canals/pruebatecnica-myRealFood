const createProductObject = ({
	_id,
	image_url,
	product_name,
	ingredients,
	brands,
	brand_owner,
	nutrition_data_per,
	nutriments,
}) => {
	return {
		_id,
		image: image_url,
		name: product_name || 'Nombre desconocido',
		brand: brand_owner || brands || 'Marca desconocida',
		ingredients: ingredients
			? ingredients.map(ingredient => ingredient.text.replace(/_/g, ''))
			: '',
		nutritionDataPer: nutrition_data_per || '--',
		nutriments: {
			energeticValueGrams: nutriments['energy-kj_100g'],
			energeticValueUnit: nutriments['energy-kj_unit'],
			energeticValueKCal: nutriments['energy-kcal_100g'],
			energeticValueKCUnit: nutriments['energy-kcal_unit'],
			fatValue: nutriments.fat,
			fatUnit: nutriments.fat_unit,
			fatSaturatedValue: nutriments['saturated-fat'],
			fatSaturatedUnit: nutriments['saturated-fat_unit'],
			carbohydratesValue: nutriments.carbohydrates,
			carbohydratesUnit: nutriments.carbohydrates_unit,
			sugarValue: nutriments.sugars_100g,
			sugarUnit: nutriments.sugars_unit,
			fiberValue: nutriments.fiber,
			fiberUnit: nutriments.fiber_unit,
			proteinsValue: nutriments.proteins,
			proteinsUnit: nutriments.proteins_unit,
			saltValue: nutriments.salt,
			saltUnit: nutriments.salt_unit,
		},
	};
};

export default createProductObject;
