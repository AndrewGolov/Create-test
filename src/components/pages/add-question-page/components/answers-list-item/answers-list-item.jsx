/* eslint-disable react-refresh/only-export-components */
import { SlPencil, SlTrash } from 'react-icons/sl';
import styled from 'styled-components';

const AnswersListItemContainer = ({
	className,
	oneAnswer,
	onChooseCorrect,
	setIsEditAnswerId,
	deleteAnswer,
	...props
}) => (
	<>
		<li className={className} {...props}>
			<span className="answer-title">{oneAnswer.title}</span>

			<input
				className="correct-checkbox"
				type="checkbox"
				checked={oneAnswer.isCorrect}
				title="Правильный ответ"
				onChange={() => onChooseCorrect(oneAnswer.id)}
			/>

			<button
				type="button"
				className="icon-button"
				title="Редактировать ответ"
				onClick={() => setIsEditAnswerId(oneAnswer.id)}
			>
				<SlPencil />
			</button>

			<button
				type="button"
				className="icon-button delete-button"
				onClick={() => deleteAnswer(oneAnswer.id)}
				title="Удалить ответ"
			>
				<SlTrash />
			</button>
		</li>
	</>
);

export const AnswersListItem = styled(AnswersListItemContainer)`
	min-height: 44px;
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 6px 20px;
	box-sizing: border-box;
	background: #191a20;
	border: 1px solid #30333d;
	border-radius: 6px;
	margin: 5px 0;

	.answer-title {
		flex: 1;
		color: #f1f1f1;
		overflow-wrap: anywhere;
		text-align: left;
	}

	.correct-checkbox {
		width: 17px;
		height: 17px;
		flex: 0 0 auto;
		cursor: pointer;
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

	.delete-button:hover {
		background: #38252a;
	}
`;
