/* eslint-disable react-refresh/only-export-components */
import { ConfirmButton } from '../../../../../../confirm-button/confirm-button';
import { CancelButton } from '../../../../../../cancel-button/cancel-button';
import { EditButton } from '../../../../../../edit-button/edit-button';
import { useState } from 'react';
import styled from 'styled-components';

const QuestionSectionContainer = ({ className, addQuestionText, dataQuestion, editQuestion }) => {
	const [questionValue, setQuestionValue] = useState('');

	const onChangeQuestion = ({ target }) => setQuestionValue(target.value);

	return (
		<div className={className}>
			<div className="section-title">
				<h3>Вопрос</h3>
			</div>

			{!dataQuestion.question ? (
				<div className="input-question-container">
					<input
						className="question-input"
						type="text"
						value={questionValue}
						onChange={onChangeQuestion}
						autoFocus
						placeholder="Введите вопрос..."
					/>

					<ConfirmButton
						type="button"
						onClick={() => addQuestionText(questionValue)}
						title="Сохранить вопрос"
					/>

					<CancelButton type="button" onClick={() => setQuestionValue('')} title="Очистить" />
				</div>
			) : (
				<div className="question-data-container">
					<h2>{dataQuestion.question}</h2>

					<EditButton
						type="button"
						onClick={() => {
							setQuestionValue(dataQuestion?.question);
							editQuestion();
						}}
						title="Редактировать вопрос"
					/>
				</div>
			)}
		</div>
	);
};

export const QuestionSection = styled(QuestionSectionContainer)`
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

	.input-question-container {
		width: 100%;
		min-height: 44px;
		text-align: left;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.question-input {
		flex: 1;
		width: 100%;
		min-width: 0;
		height: 44px;
		padding: 9px 11px;
		box-sizing: border-box;
		color: #f1f1f1;
		background: #292b34;
		border: 1px solid #4a4d59;
		border-radius: 6px;
		font: inherit;
		outline: none;
	}

	.question-input:focus {
		border-color: #777d8d;
	}

	.question-data-container {
		width: 100%;
		min-height: 44px;
		text-align: left;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.question-data-container h2 {
		flex: 1;
		margin: 0;
		color: #f1f1f1;
		font-size: 18px;
		line-height: 1.4;
		overflow-wrap: anywhere;
	}
`;
