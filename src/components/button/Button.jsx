/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const ButtonContainer = ({ className, children, type = 'button', disabled = false, ...props }) => {
	return (
		<button className={className} type={type} {...props} disabled={disabled}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '300px' }) => width};
	padding: 15px 30px;
	margin: ${({ margin }) => margin};
	background: #1a9966;
	cursor: pointer;
	font-size: 20px;
	border-radius: 5px;
	border: none;
	color: #fff;

	&:hover {
		transition: all 0.3s ease;
		background: #6ed474;
	}
	&:disabled {
		background: #7a8983;
		cursor: not-allowed;
	}
`;
