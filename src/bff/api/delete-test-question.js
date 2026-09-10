export const deleteTestQuestion = (id) =>
	fetch(`http://localhost:3000/test/delete/${id}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())

		.catch((error) => {
			console.error('Error fetching tests data:', error);
			return [];
		});
