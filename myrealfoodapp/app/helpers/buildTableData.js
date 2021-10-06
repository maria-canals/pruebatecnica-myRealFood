const buildTableData = ({ title, arrValues }) => {
	return {
		title,
		value: arrValues.map(element => {
			if (element) {
				return element;
			} else {
				return '-';
			}
		}),
	};
};

export default buildTableData;
