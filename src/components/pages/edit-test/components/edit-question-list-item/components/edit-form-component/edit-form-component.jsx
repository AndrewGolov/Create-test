/* eslint-disable react-refresh/only-export-components */
import { SlCheck, SlClose } from 'react-icons/sl';
import { IconButton } from '../icon-button/icon-button';
import styled from 'styled-components';
import { useState } from 'react';

const EditFormComponentContainer = ({ inputValue, className, onCloseEditing, submitFn }) => {
	const [value, setValue] = useState(inputValue);

	const onChange = ({ target }) => setValue(target.value);
	const onSubmitForm = (event) => {
		event.preventDefault();
		submitFn(value);
	};

	return (
		<div className={className}>
			<form onSubmit={onSubmitForm}>
				<input className="edit-form-input" type="text" defaultValue={value} onChange={onChange} autoFocus />
				<div>
					<IconButton type="submit" className="icon-button">
						<SlCheck />
					</IconButton>
					<IconButton type="button" className="icon-button" onClick={onCloseEditing}>
						<SlClose />
					</IconButton>
				</div>
			</form>
		</div>
	);
};

export const EditFormComponent = styled(EditFormComponentContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	& form {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.edit-form-input {
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
	.edit-form-input:focus {
		border-color: #777d8d;
	}
`;
