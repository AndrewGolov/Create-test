/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const CircleElementContainer = ({ className }) => {
	return <span className={className}></span>;
};

export const CircleElement = styled(CircleElementContainer)`
	text-align: center;
	background-color: ${({ $ansId }) => {
		switch ($ansId) {
			case false:
				return 'red';

			case true:
				return 'green';
		}
	}};
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 2px;
`;
