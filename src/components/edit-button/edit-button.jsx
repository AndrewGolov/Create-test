/* eslint-disable react-refresh/only-export-components */
import { SlPencil } from 'react-icons/sl';
import styled from 'styled-components';

const EditButtonContainer = ({ className, ...props }) => (
	<div className={className}>
		<button type="button" className="edit-button" {...props}>
			<SlPencil />
		</button>
	</div>
);

export const EditButton = styled(EditButtonContainer)`
	.edit-button {
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

	.edit-button:hover {
		background: #e7fc045e;
	}
`;
