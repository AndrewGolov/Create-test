/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';
const IconButtonContainer = ({ className, children, isOpen, title, ...props }) => {
	return (
		<button type="button" className={`${className} ${isOpen ? 'isOpen' : ''}`} title={title} {...props}>
			{children}
		</button>
	);
};

export const IconButton = styled(IconButtonContainer)`
	width: 32px;
	height: 32px;
	padding: 0;

	color: #aeb2c0;
	background: transparent;

	border: none;
	border-radius: 6px;

	cursor: pointer;
	font-size: 18px;
	line-height: 1;

	transition:
		background 0.15s ease,
		color 0.15s ease,
		transform 0.2s ease;

	&:hover {
		color: #ffffff;
		background: #30323c;
	}

	svg {
		transition: transform 0.3s ease;
	}

	&.isOpen svg {
		transform: rotate(180deg);
	}

	&:hover {
		color: #ffffff;
		background: #30323c;
	}
`;
