export const deleteTestQuestion = (id) =>
	fetch(`http://localhost:3000/test/delete/${id}`, {
		method: 'DELETE',
	})
		.then((response) => console.log(response.json()))

		.catch((error) => {
			console.error('Error fetching tests data:', error);
			return [];
		});
