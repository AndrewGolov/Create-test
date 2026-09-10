/* eslint-disable react-refresh/only-export-components */
import { SlClose } from 'react-icons/sl';
import styled from 'styled-components';

const CancelButtonContainer = ({ className, ...props }) => (
	<div className={className}>
		<button type="button" className="cancel-button" {...props}>
			<SlClose />
		</button>
	</div>
);

export const CancelButton = styled(CancelButtonContainer)`
	.cancel-button {
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
		color: #fb3030;
	}
	.cancel-button:hover {
		background: #ed232363;
	}
`;
