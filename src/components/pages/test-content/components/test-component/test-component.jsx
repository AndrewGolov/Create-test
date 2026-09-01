/* eslint-disable react-refresh/only-export-components */
import { Button } from '../../../../button/Button';
import { QuestionItemComponent } from '../question-item-component/question-item-component';
import styled from 'styled-components';

const TestComponentContainer = ({
	className,
	dataTest,
	currentQuestion,
	userAnswers,
	previousBtnOnClick,
	nextBtnOnClick,
	onChooseAnswer,
	onFinishTest,
}) => {
	const isAnswerSelected = !!userAnswers.find((ans) => ans?.questionId === dataTest[currentQuestion].id);

	return (
		<div className={className}>
			<form className="test-form">
				<div>
					{currentQuestion + 1}/{dataTest.length}
				</div>
				<QuestionItemComponent
					questionData={dataTest[currentQuestion]}
					onChooseAnswer={onChooseAnswer}
					userAnswers={userAnswers}
				/>
			</form>
			<div className="action-panel">
				<Button
					type="button"
					className="ap-previous-btn"
					margin="0 10px 0 0"
					onClick={previousBtnOnClick}
					disabled={currentQuestion === 0}
				>
					Предыдущий вопрос
				</Button>
				{userAnswers?.length === dataTest?.length ? (
					<Button type="button" className="ap-next-btn" onClick={onFinishTest}>
						Завершить тест
					</Button>
				) : (
					<Button
						type="button"
						className="ap-next-btn"
						onClick={nextBtnOnClick}
						disabled={currentQuestion === dataTest.length - 1 || !isAnswerSelected}
					>
						Следующий вопрос
					</Button>
				)}
			</div>
		</div>
	);
};

export const TestComponent = styled(TestComponentContainer)`
	padding: 10px;
	font-size: 20px;
	.test-form {
		max-width: 600px;
		margin: 0 auto;
	}
	.action-panel {
		margin: 40px 0 0 0;
	}
`;
