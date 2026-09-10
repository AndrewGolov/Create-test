/* eslint-disable react-refresh/only-export-components */
import { SlCheck } from 'react-icons/sl';
import styled from 'styled-components';

const ConfirmButtonContainer = ({ className, ...props }) => (
	<div className={className}>
		<button type="button" className="confirm-button" {...props}>
			<SlCheck />
		</button>
	</div>
);

export const ConfirmButton = styled(ConfirmButtonContainer)`
	.confirm-button {
		width: 36px;
		height: 36px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0;
		background: transparent;
		border: none;
		border-radius: 6px;
		font-size: 17px;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	svg {
		color: #22be1f;
	}

	.confirm-button:hover {
		background: #46fd4341;
	}
`;
