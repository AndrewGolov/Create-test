/* eslint-disable react-refresh/only-export-components */

import { IconButton } from '../icon-button/icon-button';

import { SlArrowDown, SlTrash } from 'react-icons/sl';
import styled from 'styled-components';

const QuestionActionsPanelContainer = ({ className, isOpen, setIsOpen }) => {
	return (
		<div className={className}>
			<IconButton
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				title={isOpen ? 'Свернуть' : 'Развернуть'}
				isOpen={isOpen}
			>
				<SlArrowDown />
			</IconButton>
		</div>
	);
};

export const QuestionActionsPanel = styled(QuestionActionsPanelContainer)`
	display: flex;
	align-items: center;
	gap: 4px;
	flex-shrink: 0;

	.delete-button {
		color: #d97878;
	}

	.delete-button:hover {
		color: #ff8b8b;
		background: #3a282b;
	}
`;
