export const postQuestion = (questionData) =>
	fetch(`http://localhost:3000/test/post-question`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(questionData),
	})
		.then((response) => response.json())

		.catch((error) => {
			console.error('Error post question data ...:', error);
			return null;
		});
