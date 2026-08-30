/* eslint-disable react-refresh/only-export-components */
import { Button } from '../../button/Button';
import { QuestionItemComponent } from './components';
import { useState } from 'react';
import styled from 'styled-components';

const fetchTestData = [
	{
		question: 'Допустим какой-то вопрос 1',
		answers: [
			{ title: 'ответ 1 на вопрос', correct: false, id: '1788091568028' },
			{ title: 'ответ 2 на вопрос', correct: false, id: '1788091568228' },
			{ title: 'ответ 3 на вопрос', correct: true, id: '1788091568428' },
			{ title: 'ответ 4 на вопрос', correct: false, id: '1788091568628' },
		],
		id: 1,
	},
	{
		question: 'Допустим какой-то вопрос 2',
		answers: [
			{ title: 'ответ 1 на вопрос', correct: false, id: '1788091568912' },
			{ title: 'ответ 2 на вопрос', correct: false, id: '1788091568914' },
			{ title: 'ответ 3 на вопрос', correct: false, id: '1788091568916' },
			{ title: 'ответ 4 на вопрос', correct: true, id: '1788091568918' },
		],
		id: 2,
	},
	{
		question: 'Допустим какой-то вопрос 3',
		answers: [
			{ title: 'ответ 1 на вопрос', correct: false, id: '1788091568922' },
			{ title: 'ответ 2 на вопрос', correct: true, id: '1788091568924' },
			{ title: 'ответ 3 на вопрос', correct: false, id: '1788091568926' },
			{ title: 'ответ 4 на вопрос', correct: false, id: '1788091568928' },
		],
		id: 3,
	},
	{
		question: 'Допустим какой-то вопрос 4',
		answers: [
			{ title: 'ответ 1 на вопрос', correct: true, id: '1788091568944' },
			{ title: 'ответ 2 на вопрос', correct: false, id: '1788091568940' },
			{ title: 'ответ 3 на вопрос', correct: false, id: '1788091568935' },
			{ title: 'ответ 4 на вопрос', correct: false, id: '1788091568930' },
		],
		id: 4,
	},
	{
		question: 'Допустим какой-то вопрос 5',
		answers: [
			{ title: 'ответ 1 на вопрос', correct: false, id: '1788091568946' },
			{ title: 'ответ 2 на вопрос', correct: false, id: '1788091568950' },
			{ title: 'ответ 3 на вопрос', correct: true, id: '1788091568952' },
			{ title: 'ответ 4 на вопрос', correct: false, id: '1788091568955' },
		],
		id: 5,
	},
];

const TestContentContainer = ({ className }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [dataTest, setDataTest] = useState(fetchTestData);
	return (
		<div className={className}>
			<form>
				<QuestionItemComponent questionData={dataTest[currentQuestion]} />
			</form>
			<div className="action-panel">
				<Button
					type="button"
					className="ap-previous-btn"
					margin="0 10px 0 0"
					onClick={() => setCurrentQuestion((prev) => prev - 1)}
					disabled={currentQuestion === 0}
				>
					Предыдущий вопрос
				</Button>
				<Button
					type="button"
					className="ap-next-btn"
					onClick={() => setCurrentQuestion((prev) => prev + 1)}
					disabled={currentQuestion === dataTest.length - 1}
				>
					Следующий вопрос
				</Button>
			</div>
		</div>
	);
};

export const TestContent = styled(TestContentContainer)`
	padding: 10px;
`;
