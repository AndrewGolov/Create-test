export const updateQuestionData = (id, testData) =>
	fetch(`http://localhost:3000/test/edit/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(testData),
	})
		.then((response) => response.json())

		.catch((error) => {
			console.error('Error fetching tests data:', error);
			return [];
		});
