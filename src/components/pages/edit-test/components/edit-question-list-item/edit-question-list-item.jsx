/* eslint-disable react-refresh/only-export-components */
import { Button } from '../../../../button/Button';
import { EditingComponent, IconButton } from './components';
import { useState } from 'react';
import { SlArrowDown, SlPencil, SlTrash } from 'react-icons/sl';
import styled from 'styled-components';

const EditQuestionListItemContainer = ({ className, questionData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isEditingQuestion, setIsEditingQuestion] = useState(false);
	const [editingAnswerId, setEditingAnswerId] = useState(null);

	return (
		<li className={className}>
			<div className="question-header">
				<div className="question-title">
					{isEditingQuestion ? (
						<EditingComponent
							inputValue={questionData.question}
							onCloseEditing={() => setIsEditingQuestion(false)}
						/>
					) : (
						<>
							<h4>{questionData.question}</h4>
							<IconButton
								type="button"
								className="icon-button"
								onClick={() => setIsEditingQuestion((prev) => !prev)}
								title="Редактировать вопрос"
							>
								<SlPencil />
							</IconButton>
						</>
					)}
				</div>

				<div className="question-actions">
					<IconButton
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						title={isOpen ? 'Свернуть' : 'Развернуть'}
						isOpen={isOpen}
					>
						<SlArrowDown />
					</IconButton>

					<IconButton
						type="button"
						className="icon-button delete-button"
						onClick={() => console.log('Удалить вопрос')}
						title="Удалить вопрос"
					>
						<SlTrash />
					</IconButton>
				</div>
			</div>

			<div className={`question-content ${isOpen ? 'is-open' : ''}`}>
				<div className="question-content-inner">
					<div className="answers-header">
						<h5>Варианты ответа</h5>
					</div>

					<ul className="answers-list">
						{questionData.answers.map((answer) => (
							<li className="answer-item" key={answer.id}>
								{editingAnswerId === answer.id ? (
									<EditingComponent
										inputValue={answer.title}
										onCloseEditing={() => setEditingAnswerId(null)}
									/>
								) : (
									<span className="answer-title">{answer.title}</span>
								)}

								<input
									className="correct-checkbox"
									type="checkbox"
									checked={answer.isCorrect}
									title="Правильный ответ"
									readOnly
								/>
								<IconButton
									type="button"
									className="icon-button"
									onClick={() =>
										setEditingAnswerId((prev) => (prev === answer.id ? null : answer.id))
									}
									title="Редактировать ответ"
								>
									<SlPencil />
								</IconButton>

								<IconButton
									type="button"
									className="icon-button delete-button"
									onClick={() => console.log('Удалить ответ')}
									title="Удалить ответ"
								>
									<SlTrash />
								</IconButton>
							</li>
						))}
					</ul>

					<Button type="button" className="add-answer-button">
						Добавить вариант ответа
					</Button>
				</div>
			</div>
		</li>
	);
};

export const EditQuestionListItem = styled(EditQuestionListItemContainer)`
	list-style: none;
	width: 100%;
	border: 1px solid #353842;
	border-radius: 8px;
	background: #202229;
	overflow: hidden;
	box-sizing: border-box;
	margin: 5px 0 0 0;

	.question-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		min-height: 58px;
		padding: 10px 16px;
		box-sizing: border-box;
	}

	.question-title {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: 1;
	}

	.question-title h4 {
		margin: 0;
		color: #f1f1f1;
		font-size: 16px;
		font-weight: 500;
		line-height: 1.4;
		word-break: break-word;
		width: 100%;
		text-align: left;
	}

	.answer-input:focus {
		border-color: #777d8d;
	}

	.add-answer-button {
		align-self: center;
	}

	.question-actions {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.delete-button {
		color: #d97878;
	}

	.delete-button:hover {
		color: #ff8b8b;
		background: #3a282b;
	}

	.toggle-button {
		font-size: 21px;
	}

	// .toggle-button.open {
	// 	transform: rotate(180deg);
	// }

	.question-content {
		display: grid;
		grid-template-rows: 0fr;
		padding: 0;
		opacity: 0;
		background: #191a20;
		border-top: 0 solid #353842;
		transition:
			grid-template-rows 0.3s ease,
			padding 0.3s ease,
			border-top-width 0.3s ease,
			opacity 0.2s ease;
	}

	.question-content.is-open {
		grid-template-rows: 1fr;
		padding: 18px 20px 20px;
		opacity: 1;
		border-top-width: 1px;
	}

	.question-content-inner {
		display: flex;
		flex-direction: column;
		gap: 16px;
		min-height: 0;
		overflow: hidden;
	}

	.answers-header h5 {
		margin: 0;
		color: #d8dae2;
		font-size: 20px;
		font-weight: 600;
	}

	.answers-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.answer-item {
		display: flex;
		align-items: center;
		gap: 12px;

		padding: 10px 12px;

		background: #24262e;
		border: 1px solid #353842;
		border-radius: 6px;

		box-sizing: border-box;
	}

	.answer-main {
		display: flex;
		align-items: center;
		gap: 12px;

		flex: 1;
		min-width: 0;
	}

	.checkbox-wrapper {
		display: flex;
		align-items: center;
		gap: 6px;

		flex-shrink: 0;

		color: #aeb2c0;

		font-size: 12px;
		cursor: pointer;
	}

	.checkbox-wrapper input {
		width: 15px;
		height: 15px;
		margin: 0;

		cursor: pointer;
	}

	.answer-title {
		flex: 1;
		min-width: 0;
		text-align: left;
		color: #e7e8ec;
		font-size: 14px;
		line-height: 1.4;
		word-break: break-word;
	}

	.answer-input {
		flex: 1;
		min-width: 0;

		padding: 8px 10px;

		color: #f1f1f1;
		background: #292b34;

		border: 1px solid #4a4d59;
		border-radius: 6px;

		font: inherit;
		outline: none;
		box-sizing: border-box;
	}

	.answer-actions {
		display: flex;
		align-items: center;
		gap: 3px;

		flex-shrink: 0;
	}
`;
