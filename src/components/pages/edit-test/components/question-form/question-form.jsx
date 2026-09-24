/* eslint-disable react-refresh/only-export-components */
import { QuestionSection, AnswerSection } from './components';
import { Button } from '../../../../button/Button';
import { useState } from 'react';
import { questionDataScheme } from './utils';
import { useQuestionData } from './hooks';
import styled from 'styled-components';
import { NavigationPanel } from '../../../../navigation-panel/navigation-panel';

const QuestionFormContainer = ({ className, editData, onSubmit }) => {
	const { dataQuestion, addAnswer, editQuestion, addQuestionText, deleteAnswer, editAnswer, onChooseCorrect } =
		useQuestionData(editData);
	const [error, setError] = useState(null);

	const onSubmitForm = async (event) => {
		event.preventDefault();
		try {
			const validData = await questionDataScheme.validate(dataQuestion);
			onSubmit(validData);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className={className}>
			<form onSubmit={onSubmitForm}>
				<div className="wrapper">
					<QuestionSection
						editData={editData}
						addQuestionText={addQuestionText}
						dataQuestion={dataQuestion}
						editQuestion={editQuestion}
					/>

					<AnswerSection
						dataQuestion={dataQuestion}
						editAnswer={editAnswer}
						deleteAnswer={deleteAnswer}
						onChooseCorrect={onChooseCorrect}
						setError={setError}
						addAnswer={addAnswer}
					/>
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
			<NavigationPanel />
		</div>
	);
};

export const QuestionForm = styled(QuestionFormContainer)`
	width: 100%;
	padding: 30px 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;

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

	/* Основная кнопка */

	.submit-button {
		display: block;

		width: 520px;
		max-width: 700px;

		margin: 20px auto 0;
	}
`;
