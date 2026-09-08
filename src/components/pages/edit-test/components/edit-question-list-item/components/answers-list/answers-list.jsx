/* eslint-disable react-refresh/only-export-components */

import { IconButton } from '../icon-button/icon-button';
import { Button } from '../../../../../../button/Button';
import { EditFormComponent } from '../edit-form-component/edit-form-component';
import { SlPencil, SlTrash } from 'react-icons/sl';
import styled from 'styled-components';

const AnswersListContainer = ({ className, oneOfQuestionList, editingAnswerId, setEditingAnswerId }) => {
	return (
		<div className={className}>
			<ul className="answers-list">
				{oneOfQuestionList.answers.map((answer) => (
					<li className="answer-item" key={answer.id}>
						{editingAnswerId === answer.id ? (
							<EditFormComponent
								inputValue={answer.title}
								onCloseEditing={() => setEditingAnswerId(null)}
								submitFn={() => /*TODO*/ console.log('Изменен вариант ответа')}
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
							onClick={() => setEditingAnswerId((prev) => (prev === answer.id ? null : answer.id))}
							title="Редактировать ответ"
						>
							<SlPencil />
						</IconButton>

						<IconButton
							type="button"
							className="icon-button delete-button"
							onClick={() => /*TODO*/ console.log('Удалить ответ')}
							title="Удалить ответ"
						>
							<SlTrash />
						</IconButton>
					</li>
				))}
			</ul>
			<Button
				type="button"
				className="add-answer-button"
				onClick={() => /*TODO*/ console.log('Добавить вариант ответа')}
			>
				Добавить вариант ответа
			</Button>
		</div>
	);
};

export const AnswersList = styled(AnswersListContainer)`
	list-style: none;
`;
