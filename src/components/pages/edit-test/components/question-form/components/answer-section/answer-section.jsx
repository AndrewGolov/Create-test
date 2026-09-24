/* eslint-disable react-refresh/only-export-components */
import { AnswerFieldComponent } from '../answer-field-component/answer-field-component';
import { AnswersListItem } from '../answers-list-item/answers-list-item';
import { Button } from '../../../../../../button/Button';
import { useState } from 'react';
import styled from 'styled-components';

const AnswerSectionContainer = ({
	className,
	dataQuestion,
	editAnswer,
	deleteAnswer,
	onChooseCorrect,
	setError,
	addAnswer,
}) => {
	const [isAddAnswer, setIsAddAnswer] = useState(false);
	const [isEditAnswerId, setIsEditAnswerId] = useState(null);
	const closeAddAnswer = () => {
		setIsEditAnswerId(null);
		setIsAddAnswer(false);
	};

	return (
		<div className={className}>
			{dataQuestion.answers.length === 0 ? (
				<div>Список ответов еще пуст</div>
			) : (
				<>
					<div className="section-title">
						<h3>Варианты ответа</h3>
					</div>
					<ul className="answers-list">
						{dataQuestion.answers.map((oneAnswer) =>
							isEditAnswerId === oneAnswer.id ? (
								<AnswerFieldComponent
									onClose={closeAddAnswer}
									onSubmit={(value) => {
										editAnswer(oneAnswer.id, value);
										closeAddAnswer();
									}}
									key={oneAnswer.id}
									initialValue={oneAnswer.title}
								/>
							) : (
								<AnswersListItem
									key={oneAnswer.id}
									oneAnswer={oneAnswer}
									onChooseCorrect={(id) => {
										setError(null);
										onChooseCorrect(id);
									}}
									setIsEditAnswerId={setIsEditAnswerId}
									deleteAnswer={deleteAnswer}
								/>
							),
						)}
					</ul>
				</>
			)}

			<div className="add-answer-container">
				{isAddAnswer ? (
					<AnswerFieldComponent
						onClose={closeAddAnswer}
						onSubmit={(answerValue) => {
							addAnswer(answerValue);
							closeAddAnswer();
						}}
					/>
				) : (
					<Button type="button" className="add-answer-button" onClick={() => setIsAddAnswer(true)}>
						Добавить вариант ответа
					</Button>
				)}
			</div>
		</div>
	);
};

export const AnswerSection = styled(AnswerSectionContainer)`
	display: flex;
	flex-direction: column;
	gap: 5px;

	.section-title {
		display: flex;
		color: grey;
		align-items: center;
		text-align: left;
		min-height: 24px;
	}

	.section-title h3 {
		margin: 0;
		color: #8e8989a0;
		font-size: 15px;
		font-weight: 600;
	}

	.answers-list {
		padding: 0;
	}

	.add-answer-container {
		width: 100%;
		min-height: 44px;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	.add-answer-button {
		flex: 0 0 auto;
	}
`;
