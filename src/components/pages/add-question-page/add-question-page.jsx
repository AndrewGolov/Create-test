/* eslint-disable react-refresh/only-export-components */
import { SlPencil } from 'react-icons/sl';
import { Button } from '../../button/Button';
import { AnswerFieldComponent, AnswersListItem, CancelButton, ConfirmButton } from './components';
import { useState } from 'react';
import styled from 'styled-components';

const AddQuestionPageContainer = ({ className }) => {
	const [dataQuestion, setDataQuestion] = useState({
		question: '',
		answers: [],
	});

	const [questionValue, setQuestionValue] = useState('');
	const [isAddAnswer, setIsAddAnswer] = useState(false);
	const [isEditAnswerId, setIsEditAnswerId] = useState(null);

	const onChangeQuestion = ({ target }) => setQuestionValue(target.value);

	const onChangeIsCorrect = ({ target }) => console.log(target.id);

	const addQuestionText = () => {
		if (!questionValue.trim()) return;

		setDataQuestion((prev) => ({
			...prev,
			question: questionValue,
		}));
	};

	const editQuestion = () => {
		setQuestionValue(dataQuestion.question);
		setDataQuestion((prev) => ({
			...prev,
			question: '',
		}));
	};
	const closeAddAnswer = () => {
		setIsEditAnswerId(null);
		setIsAddAnswer(false);
	};

	const addAnswer = (answerText) => {
		if (!answerText.trim()) return;

		const newAnswer = {
			id: Date.now(),
			title: answerText,
			isCorrect: false,
		};

		setDataQuestion((prev) => ({
			...prev,
			answers: [...prev.answers, newAnswer],
		}));

		closeAddAnswer();
	};

	const deleteAnswer = (answerId) => {
		setDataQuestion((prev) => ({
			...prev,
			answers: prev.answers.filter(({ id }) => id !== answerId),
		}));
	};
	const editAnswer = (answerId, editAnswer) => {
		setDataQuestion((prev) => ({
			...prev,
			answers: prev.answers.map((answer) => (answer.id !== answerId ? answer : { ...answer, title: editAnswer })),
		}));
		closeAddAnswer();
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		console.log('Добавить вопрос в тест:', dataQuestion);
	};

	return (
		<div className={className}>
			<form onSubmit={onSubmitForm}>
				<div className="wrapper">
					{/* Вопрос */}
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

								<ConfirmButton type="button" onClick={addQuestionText} title="Сохранить вопрос" />

								<CancelButton type="button" onClick={() => setQuestionValue('')} title="Очистить" />
							</div>
						) : (
							<div className="question-data-container">
								<h2>{dataQuestion.question}</h2>

								<button
									type="button"
									className="icon-button"
									onClick={editQuestion}
									title="Редактировать вопрос"
								>
									<SlPencil />
								</button>
							</div>
						)}
					</div>

					{/* Ответы */}
					<div className="answers-section">
						<div className="section-title">
							<h3>Варианты ответа</h3>
						</div>

						{dataQuestion.answers.length > 0 && (
							<ul className="answers-list">
								{dataQuestion.answers.map((oneAnswer) =>
									isEditAnswerId === oneAnswer.id ? (
										<AnswerFieldComponent
											onClose={() => editAnswer(oneAnswer.id, oneAnswer.title)}
											onSubmit={(value) => editAnswer(oneAnswer.id, value)}
											key={oneAnswer.id}
											initialValue={oneAnswer.title}
										/>
									) : (
										<AnswersListItem
											key={oneAnswer.id}
											oneAnswer={oneAnswer}
											onChangeIsCorrect={onChangeIsCorrect}
											setIsEditAnswerId={setIsEditAnswerId}
											deleteAnswer={deleteAnswer}
										/>
									),
								)}
							</ul>
						)}

						{/* Блок добавления ответа */}
						<div className="add-answer-container">
							{isAddAnswer ? (
								<AnswerFieldComponent onClose={closeAddAnswer} onSubmit={addAnswer} />
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

				{dataQuestion.question && dataQuestion.answers.length > 1 && (
					<Button type="submit" className="submit-button">
						Добавить вопрос в тест
					</Button>
				)}
			</form>
		</div>
	);
};

export const AddQuestionPage = styled(AddQuestionPageContainer)`
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

	.icon-button {
		width: 36px;
		height: 36px;

		flex: 0 0 36px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0;

		color: #f1f1f1;
		background: transparent;

		border: none;
		border-radius: 6px;

		font-size: 17px;

		cursor: pointer;

		transition: background 0.2s ease;
	}

	.icon-button:hover {
		background: #292b34;
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
