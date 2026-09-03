/* eslint-disable react-refresh/only-export-components */
import { TestComponent, FinishedTestComponent } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTestsData } from '../../../selectors';
import { useState, useEffect } from 'react';
import { loadTestAsync } from '../../../bff/actions';
import styled from 'styled-components';

const TestContentContainer = ({ className }) => {
	const dispatch = useDispatch();
	const dataTest = useSelector(selectTestsData);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [statisticTest, setStatisticTest] = useState({});
	const [isFinished, setIsFinished] = useState(false);

	const previousBtnOnClick = () => setCurrentQuestion((prev) => prev - 1);
	const nextBtnOnClick = () => setCurrentQuestion((prev) => prev + 1);
	const onRepeatTest = () => {
		setCurrentQuestion(0);
		setUserAnswers([]);
		setStatisticTest({});
		setIsFinished(false);
	};

	useEffect(() => {
		dispatch(loadTestAsync());
	}, [dispatch]);

	const onChooseAnswer = ({ target }) => {
		const chooseAnswer = dataTest[currentQuestion].answers.find((ans) => ans.id === target.id);
		const userAnswer = {
			questionId: dataTest[currentQuestion]._id,
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
		const correctAnswers = userAnswers.filter(({ isCorrect }) => isCorrect === true);

		const newStatistic = {
			date: Date.now(),
			countQuestions: dataTest.length,
			countCorrectAnswers: correctAnswers.length,
			answers: [...userAnswers],
		};

		setStatisticTest(newStatistic);
		setIsFinished(true);
	};

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
