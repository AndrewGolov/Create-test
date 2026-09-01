/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import styled from 'styled-components';

const StyledLinkContainer = ({ className, children, ...props }) => {
	return (
		<Link className={className} {...props}>
			{children}
		</Link>
	);
};

export const StyledLink = styled(StyledLinkContainer)`
	display: block;
	width: ${({ width = '300px' }) => width};
	padding: 15px 30px;
	margin: ${({ margin }) => margin};
	cursor: pointer;
	background: #1a9966;
	font-size: 20px;
	border-radius: 5px;
	border: none;
	text-decoration: none;
	color: #fff;

	&:hover {
		transition: all 0.3s ease;
		background: #6ed474;
	}
`;
