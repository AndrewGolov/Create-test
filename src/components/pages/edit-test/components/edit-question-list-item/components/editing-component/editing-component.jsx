/* eslint-disable react-refresh/only-export-components */
import { SlCheck, SlClose } from 'react-icons/sl';
import { IconButton } from '../icon-button/icon-button';
import styled from 'styled-components';
import { useState } from 'react';

const EditingComponentContainer = ({ inputValue, className, onCloseEditing }) => {
	const [value, setValue] = useState(inputValue);
	return (
		<div className={className}>
			<input className="question-input" type="text" defaultValue={value} autoFocus />
			<div>
				<IconButton
					type="button"
					className="icon-button"
					onClick={() => console.log('Сохранить изменения вопроса')}
				>
					<SlCheck />
				</IconButton>
				<IconButton type="button" className="icon-button" onClick={onCloseEditing}>
					<SlClose />
				</IconButton>
			</div>
		</div>
	);
};

export const EditingComponent = styled(EditingComponentContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	.question-input {
		flex: 1;
		width: 100%;
		padding: 9px 11px;
		margin-right: 10px;

		color: #f1f1f1;
		background: #292b34;

		border: 1px solid #4a4d59;
		border-radius: 6px;

		font: inherit;
		outline: none;
		box-sizing: border-box;
	}
	.question-input:focus {
		border-color: #777d8d;
	}
`;
