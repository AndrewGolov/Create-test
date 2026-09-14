import * as yup from 'yup';

export const questionDataScheme = yup.object().shape({
	question: yup.string().trim().required('Введите вопрос'),
	answers: yup
		.array()
		.required('Добавьте варианты ответов')
		.min(2, 'Количество обязательных вопросов')
		.test('hasCorrectedAnswer', 'Необходимо выбрать правильный ответ', (answers) =>
			answers.some((ans) => ans.isCorrect),
		),
});
