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
	padding: 20px 40px;
	margin: ${({ margin }) => margin};
	cursor: pointer;
	font-size: 20px;
	border-radius: 5px;
	border: none;

	&:hover {
		transition: all 0.3s ease;
		background: #2a4037;
		border-radius: 15px;
	}
`;
