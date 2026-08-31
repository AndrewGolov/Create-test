/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const QuestionItemComponentContainer = ({ className, questionData, onChooseAnswer, userAnswers }) => {
	const selectedAnswer = userAnswers.find(({ questionId }) => questionId === questionData.id);

	return (
		<>
			<span>{questionData.question}</span>
			<ul className={className}>
				{questionData.answers.map(({ title, id }) => (
					<li className="ql__item" key={id}>
						<input
							type="radio"
							name={`question-${questionData.id}`}
							id={id}
							onChange={onChooseAnswer}
							checked={selectedAnswer?.answerId === id}
						/>
						<label htmlFor={id}>{title}</label>
					</li>
				))}
			</ul>
		</>
	);
};

export const QuestionItemComponent = styled(QuestionItemComponentContainer)`
	padding: 10px;
	font-size: 20px;
	list-style: none;

	.ql__item {
	}
`;
