/* eslint-disable react-refresh/only-export-components */
import { ConfirmButton } from '../../../../../../confirm-button/confirm-button';
import { CancelButton } from '../../../../../../cancel-button/cancel-button';
import { useState } from 'react';
import styled from 'styled-components';

const AnswerFieldComponentContainer = ({ className, onClose, onSubmit, initialValue = '' }) => {
	const [value, setValue] = useState(initialValue);
	const onCancel = () => onClose();
	const onChangeAnswer = ({ target }) => setValue(target.value);
	const onConfirm = () => onSubmit(value);

	return (
		<div className={className}>
			<input
				className="field-component"
				type="text"
				value={value}
				onChange={onChangeAnswer}
				autoFocus
				placeholder="Введите вариант ответа..."
			/>
			<div className="action-panel">
				<ConfirmButton type="button" onClick={onConfirm} title="Добавить ответ" />
				<CancelButton type="button" onClick={onCancel} title="Отмена" />
			</div>
		</div>
	);
};

export const AnswerFieldComponent = styled(AnswerFieldComponentContainer)`
	display: flex;
	flex: 1;

	input {
		flex: 1;
		margin: 0 5px 5px 0;
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

	input:focus {
		border-color: #777d8d;
	}

	.action-panel {
		display: flex;
		align-self: center;
	}
`;
