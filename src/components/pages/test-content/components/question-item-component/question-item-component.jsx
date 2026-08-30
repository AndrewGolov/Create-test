/* eslint-disable react-refresh/only-export-components */

import styled from 'styled-components';

const QuestionItemComponentContainer = ({ className, questionData }) => {
	return (
		<>
			<span>{questionData.question}</span>
			<ul className={className}>
				{questionData.answers.map(({ title, id }, index) => (
					<li className="ql__item" key={index}>
						<input type="radio" name={questionData.id} id={id} />
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
