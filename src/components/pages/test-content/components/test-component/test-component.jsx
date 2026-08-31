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
	isChoosenAnswer,
	onFinishTest,
}) => {
	return (
		<div className={className}>
			<form>
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
				{userAnswers.length === dataTest.length ? (
					<Button type="button" className="ap-next-btn" onClick={onFinishTest}>
						Завершить тест
					</Button>
				) : (
					<Button
						type="button"
						className="ap-next-btn"
						onClick={nextBtnOnClick}
						disabled={currentQuestion === dataTest.length - 1 || !isChoosenAnswer}
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
`;
