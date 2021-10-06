const fetchProductJSON = async barcode => {
	try {
		const response = await fetch(
			`https://world.openfoodfacts.org/api/v0/product/${barcode}`
		);

		const data = await response.json();

		const {
			_id,
			image_url,
			product_name,
			ingredients,
			brand_owner,
			brands,
			nutriments,
			nutrition_data_per,
		} = data.product;
		return {
			_id,
			image_url,
			product_name,
			ingredients,
			brand_owner,
			brands,
			nutriments,
			nutrition_data_per,
		};
	} catch (error) {
		console.log(error);
	}
};

export default fetchProductJSON;
