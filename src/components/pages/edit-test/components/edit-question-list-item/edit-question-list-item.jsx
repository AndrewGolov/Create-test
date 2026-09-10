/* eslint-disable react-refresh/only-export-components */
import { removeTestQuestion } from '../../../../../bff/actions';
import { useDispatch } from 'react-redux';
import { IconButton } from './components';
import { SlPencil, SlTrash } from 'react-icons/sl';
import styled from 'styled-components';
import { Link } from 'react-router';

const EditQuestionListItemContainer = ({ className, questionData }) => {
	const dispatch = useDispatch();
	const onRemoveQuestion = async () => {
		await dispatch(removeTestQuestion(questionData._id));
	};
	if (!questionData) return;
	return (
		<li className={className}>
			<h4 className="question-title">{questionData.question}</h4>
			<div className="action-panel">
				<Link to={`/edit-question/${questionData._id}`} className="edit-btn" title="Редактировать вопрос">
					<SlPencil />
				</Link>
				<IconButton
					type="button"
					className="icon-button delete-button"
					onClick={onRemoveQuestion}
					title="Удалить вопрос"
				>
					<SlTrash />
				</IconButton>
			</div>
		</li>
	);
};

export const EditQuestionListItem = styled(EditQuestionListItemContainer)`
	svg {
		transition: transform 0.3s ease;
	}

	display: flex;
	width: 100%;
	border: 1px solid #353842;
	border-radius: 8px;
	background: #202229;
	overflow: hidden;
	box-sizing: border-box;
	margin: 5px 0 0 0;
	padding: 5px;

	.question-title {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: 1;
	}

	.action-panel {
		align-self: center;
	}

	&:hover {
		color: #ffffff;
		background: #30323c;
	}
`;

/*
<li className={className}>
			<div className="question-header">
				<div className="question-title">
					{isEditingQuestion ? (
						<EditFormComponent
							inputValue={oneOfQuestionList.question}
							onCloseEditing={() => setIsEditingQuestion(false)}
							submitFn={updateQuestionTest}
						/>
					) : (

					)}
				</div>

				<QuestionActionsPanel isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			<div className={`question-content ${isOpen ? 'is-open' : ''}`}>
				<div className="question-content-inner">
					<div className="answers-header">
						<h5>Варианты ответа</h5>
					</div>

					<AnswersList
						oneOfQuestionList={oneOfQuestionList}
						editingAnswerId={editingAnswerId}
						setEditingAnswerId={setEditingAnswerId}
					/>

					<Button
						type="button"
						className="add-answer-button"
						onClick={() =>  console.log('Сохранить все изменения формы')}
					>
						Сохранить изменния
					</Button>
				</div>
			</div>
		</li>


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
*/
