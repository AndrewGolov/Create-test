export const getTestData = () =>
	fetch('http://localhost:3000/test')
		.then((response) => response.json())

		.catch((error) => {
			console.error('Error fetching tests data:', error);
			return [];
		});
