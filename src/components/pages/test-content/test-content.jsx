/* eslint-disable react-refresh/only-export-components */
import { TestComponent, FinishedTestComponent } from './components';
import { getTestData } from '../../../bff';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const fetchTestData = [
	{
		question: 'Тебя зовут Андрей',
		answers: [
			{ title: 'Да', isCorrect: true, id: '1788091568028' },
			{ title: 'Нет', isCorrect: false, id: '1788091568228' },
			{
				title: 'styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.',
				isCorrect: false,
				id: '1788091568428',
			},
			{ title: 'Меня не зовут', isCorrect: false, id: '1788091568628' },
		],
		id: 1,
	},

	{
		question: 'Тебе сколько лет?',
		answers: [
			{ title: '20', isCorrect: false, id: '1788091568912' },
			{ title: '21', isCorrect: false, id: '1788091568914' },
			{ title: '30', isCorrect: false, id: '1788091568916' },
			{ title: '36', isCorrect: true, id: '1788091568918' },
		],
		id: 2,
	},
];

const TestContentContainer = ({ className }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [statisticTest, setStatisticTest] = useState({});
	const [isFinished, setIsFinished] = useState(false);
	const [dataTest, setDataTest] = useState([]);
	const previousBtnOnClick = () => setCurrentQuestion((prev) => prev - 1);
	const nextBtnOnClick = () => setCurrentQuestion((prev) => prev + 1);
	const onRepeatTest = () => {
		setCurrentQuestion(0);
		setUserAnswers([]);
		setStatisticTest({});
		setIsFinished(false);
	};

	const onChooseAnswer = ({ target }) => {
		const chooseAnswer = dataTest[currentQuestion].answers.find((ans) => ans.id === target.id);
		const userAnswer = {
			questionId: dataTest[currentQuestion].id,
			answerId: target.id,
			isCorrect: chooseAnswer.isCorrect,
		};

		setUserAnswers((prev) =>
			prev.some((ans) => ans.questionId === userAnswer.questionId)
				? prev.map((ans) =>
						ans.questionId === userAnswer.questionId
							? { ...ans, answerId: userAnswer.answerId, isCorrect: userAnswer.isCorrect }
							: ans,
					)
				: [...prev, userAnswer],
		);
	};

	const onFinishTest = () => {
		const CorrectAnswers = userAnswers.filter(({ isCorrect }) => isCorrect === true);

		const newStatistic = {
			date: Date.now(),
			countQuestions: dataTest.length,
			countCorrectAnswers: CorrectAnswers.length,
			answers: [...userAnswers],
		};

		setStatisticTest(newStatistic);
		setIsFinished(true);
	};

	useEffect(() => {
		getTestData().then((data) => {
			setDataTest(data);
		});
	}, []);
	useEffect(() => {
		if (Object.keys(statisticTest).length === 0) return;
		const getStatistic = JSON.parse(localStorage.getItem('statisticTesting')) || [];
		localStorage.setItem('statisticTesting', JSON.stringify([...getStatistic, statisticTest]));
	}, [statisticTest]);

	return (
		<div className={className}>
			{isFinished ? (
				<FinishedTestComponent statistic={statisticTest} onRepeatTest={onRepeatTest} />
			) : (
				<TestComponent
					userAnswers={userAnswers}
					dataTest={dataTest}
					currentQuestion={currentQuestion}
					previousBtnOnClick={previousBtnOnClick}
					nextBtnOnClick={nextBtnOnClick}
					onChooseAnswer={onChooseAnswer}
					onFinishTest={onFinishTest}
				/>
			)}
		</div>
	);
};

export const TestContent = styled(TestContentContainer)`
	padding: 10px;
`;
