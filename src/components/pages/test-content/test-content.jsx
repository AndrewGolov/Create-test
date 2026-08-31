/* eslint-disable react-refresh/only-export-components */
import { TestComponent, FinishedTestComponent } from './components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const fetchTestData = [
	{
		question: 'Тебя зовут Андрей',
		answers: [
			{ title: 'Да', isCorrect: true, id: '1788091568028' },
			{ title: 'Нет', isCorrect: false, id: '1788091568228' },
			{ title: 'Меня зовут Максим', isCorrect: false, id: '1788091568428' },
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
	{
		question: 'Ты гражданин РФ?',
		answers: [
			{ title: 'Нет', isCorrect: false, id: '1788091568922' },
			{ title: 'Да', isCorrect: true, id: '1788091568924' },
			{ title: 'Может быть', isCorrect: false, id: '1788091568926' },
			{ title: 'Я бомж', isCorrect: false, id: '1788091568928' },
		],
		id: 3,
	},
	{
		question: 'Ты женат?',
		answers: [
			{ title: 'Нет', isCorrect: true, id: '1788091568944' },
			{ title: 'Да', isCorrect: false, id: '1788091568940' },
			{ title: 'В разводе!', isCorrect: false, id: '1788091568935' },
			{ title: 'Не определился', isCorrect: false, id: '1788091568930' },
		],
		id: 4,
	},
	{
		question: 'Ты любишь BMW',
		answers: [
			{ title: 'Нет', isCorrect: false, id: '1788091568946' },
			{ title: 'Еще раз нет', isCorrect: false, id: '1788091568950' },
			{ title: 'BMW FOREVER', isCorrect: true, id: '1788091568952' },
			{ title: 'VAG One Love', isCorrect: false, id: '1788091568955' },
		],
		id: 5,
	},
];

const TestContentContainer = ({ className }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [dataTest, setDataTest] = useState(fetchTestData); // временный стейт до получения данных с сервера
	const [userAnswers, setUserAnswers] = useState([]);
	const [statisticTest, setStatisticTest] = useState([]);
	const [isChoosenAnswer, setIsChoosenAnswer] = useState(false); //todo Заменить на вычисляемое значение из массива userAnswers
	const [isFinished, setIsFinished] = useState(false);
	const history = JSON.parse(localStorage.getItem('Statistic-User-Test'));

	console.log(history);

	const previousBtnOnClick = () => {
		setCurrentQuestion((prev) => prev - 1);
		setIsChoosenAnswer(true);
	};
	const nextBtnOnClick = () => {
		setCurrentQuestion((prev) => prev + 1);
		setIsChoosenAnswer(false);
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
		setIsChoosenAnswer(true);
	};
	const onFinishTest = () => {
		const isCorrectAnswers = userAnswers.filter(({ isCorrect }) => isCorrect === true);
		const counterCorrectAnswers = isCorrectAnswers.length;
		console.log(counterCorrectAnswers);
		const newStatistic = {
			date: Date.now(),
			countQuestions: dataTest.length,
			countCorrectAnswers: counterCorrectAnswers,
		};
		console.log('newStatistic:', newStatistic);
		setStatisticTest((prev) => [...prev, newStatistic]);
		setIsFinished(true);
	};

	useEffect(() => {
		if (isFinished) {
			localStorage.setItem('Statistic-User-Test', JSON.stringify(statisticTest));
		}
	}, [isFinished, statisticTest]);
	return (
		<div className={className}>
			{isFinished ? (
				<FinishedTestComponent statistic={statisticTest} />
			) : (
				<TestComponent
					dataTest={dataTest}
					currentQuestion={currentQuestion}
					previousBtnOnClick={previousBtnOnClick}
					nextBtnOnClick={nextBtnOnClick}
					onChooseAnswer={onChooseAnswer}
					isChoosenAnswer={isChoosenAnswer}
					userAnswers={userAnswers}
					onFinishTest={onFinishTest}
				/>
			)}
		</div>
	);
};

export const TestContent = styled(TestContentContainer)`
	padding: 10px;
`;
