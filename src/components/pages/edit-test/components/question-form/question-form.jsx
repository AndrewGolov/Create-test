/* eslint-disable react-refresh/only-export-components */
import { AnswerFieldComponent, AnswersListItem } from './components';
import { Button } from '../../../../button/Button';
import { CancelButton } from '../../../../cancel-button/cancel-button';
import { ConfirmButton } from '../../../../confirm-button/confirm-button';
import { EditButton } from '../../../../edit-button/edit-button';
import { useState } from 'react';
import { questionDataScheme } from './utils';
import { useQuestionData } from './hooks';
import styled from 'styled-components';

const QuestionFormContainer = ({ className, editData, parentSubmit }) => {
	const {
		dataQuestion,
		addQuestionText,
		editQuestion,
		addAnswer,
		deleteAnswer,
		editAnswer,
		onChooseCorrect,
		finishAdding,
	} = useQuestionData(editData);
	const [error, setError] = useState(null);
	const [questionValue, setQuestionValue] = useState('');
	const [isAddAnswer, setIsAddAnswer] = useState(false);
	const [isEditAnswerId, setIsEditAnswerId] = useState(null);

	const onChangeQuestion = ({ target }) => setQuestionValue(target.value);

	const closeAddAnswer = () => {
		setIsEditAnswerId(null);
		setIsAddAnswer(false);
	};

	const onSubmitForm = async (event) => {
		event.preventDefault();
		try {
			const validData = await questionDataScheme.validate(dataQuestion);
			parentSubmit(validData);
			closeAddAnswer();
			finishAdding();
			setQuestionValue('');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className={className}>
			<form onSubmit={onSubmitForm}>
				<div className="wrapper">
					<div className="question-section">
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

					<div className="answers-section">
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
								<Button
									type="button"
									className="add-answer-button"
									onClick={() => setIsAddAnswer(true)}
								>
									Добавить вариант ответа
								</Button>
							)}
						</div>
					</div>
				</div>
				{error && <span>{error}</span>}
				<Button
					type="submit"
					className="submit-button"
					disabled={!(dataQuestion.question && dataQuestion.answers.length > 1)}
				>
					Сохранить
				</Button>
			</form>
		</div>
	);
};

export const QuestionForm = styled(QuestionFormContainer)`
	width: 100%;
	padding: 30px 20px;
	box-sizing: border-box;

	.question-form {
		width: 100%;
	}

	.wrapper {
		width: 100%;
		max-width: 700px;

		margin: 0 auto;
		padding: 24px;

		display: flex;
		flex-direction: column;
		gap: 28px;

		box-sizing: border-box;

		background: #202229;
		border: 1px solid #30333d;
		border-radius: 10px;
	}

	/* Общие секции */

	.question-section,
	.answers-section {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

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

	/* Вопрос */

	.input-question-container,
	.question-data-container {
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

	.question-data-container h2 {
		flex: 1;

		margin: 0;

		color: #f1f1f1;

		font-size: 18px;
		line-height: 1.4;

		overflow-wrap: anywhere;
	}

	/* Ответы */
	.answers-list {
		padding: 0;
	}

	/* Добавление ответа */

	.add-answer-container {
		width: 100%;
		min-height: 44px;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	.question-input {
		flex: 1;
	}

	.add-answer-button {
		flex: 0 0 auto;
	}

	/* Основная кнопка */

	.submit-button {
		display: block;

		width: 520px;
		max-width: 700px;

		margin: 20px auto 0;
	}
`;
