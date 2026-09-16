import { useState } from 'react';

export const useQuestionData = (editQuestionData) => {
	const [dataQuestion, setDataQuestion] = useState(
		editQuestionData || {
			question: '',
			answers: [],
		},
	);
	
	const addQuestionText = (questionValue) => {
		if (!questionValue.trim()) return;

		setDataQuestion((prev) => ({
			...prev,
			question: questionValue,
		}));
	};

	const editQuestion = () => {
		setDataQuestion((prev) => ({
			...prev,
			question: '',
		}));
	};

	const addAnswer = (answerText) => {
		if (!answerText.trim()) return;

		const newAnswer = {
			id: Date.now(),
			title: answerText,
			isCorrect: false,
		};

		setDataQuestion((prev) => ({
			...prev,
			answers: [...prev.answers, newAnswer],
		}));
	};

	const deleteAnswer = (answerId) => {
		setDataQuestion((prev) => ({
			...prev,
			answers: prev.answers.filter(({ id }) => id !== answerId),
		}));
	};
	const editAnswer = (answerId, editAnswerPrev) => {
		setDataQuestion((prev) => ({
			...prev,
			answers: prev.answers.map((answer) =>
				answer.id !== answerId ? answer : { ...answer, title: editAnswerPrev },
			),
		}));
	};

	const finishAdding = () => {
		setDataQuestion({
			question: '',
			answers: [],
		});
	};

	const onChooseCorrect = (id) => {
		if (dataQuestion.answers.some((ans) => ans.isCorrect && ans.id !== id)) return;

		const answersWithCorrect = dataQuestion.answers.map((ans) =>
			ans.id === id ? { ...ans, isCorrect: !ans.isCorrect } : ans,
		);
		setDataQuestion((prev) => ({ ...prev, answers: answersWithCorrect }));
	};

	return {
		dataQuestion,
		addQuestionText,
		editQuestion,
		addAnswer,
		deleteAnswer,
		editAnswer,
		onChooseCorrect,
		finishAdding,
	};
};
