/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const QuestionItemComponentContainer = ({ className, onChooseAnswer, userAnswers, currentTestData }) => {
	const selectedAnswer = userAnswers.find(({ questionId }) => questionId === currentTestData._id);

	return (
		<div className={className}>
			<span>{currentTestData.question}</span>
			<ul className="ql__list">
				{currentTestData.answers.map(({ title, id }) => (
					<li className="ql__item" key={id}>
						<input
							type="radio"
							name={`question-${currentTestData._id}`}
							id={id}
							onChange={onChooseAnswer}
							checked={selectedAnswer?.answerId === id}
						/>
						<label htmlFor={id}>{title}</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export const QuestionItemComponent = styled(QuestionItemComponentContainer)`
	.ql__list {
		text-align: left;
		padding: 10px;
		font-size: 20px;
		list-style: none;
	}
	span {
		display: block;
		margin: 20px 0 0 0;
	}

	.ql__item {
		margin: 8px 0;
		display: flex;
		align-items: end;
		line-height: 24px;

	}
	.ql__item > input {
		align-self: flex-start;
		flex-shrink: 0;
		margin: 10px 20px 0 0;
		width: 20px;
		height: 20px;
}
	}
`;
