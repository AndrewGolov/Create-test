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
	padding: ${({ padding = '15px 30px' }) => padding};
	margin: ${({ margin }) => margin};
	background: ${({ background = '#1a9966' }) => background};
	cursor: pointer;
	font-size: ${({ fz = '20px' }) => fz};
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
