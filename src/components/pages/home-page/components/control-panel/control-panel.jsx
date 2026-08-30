/* eslint-disable react-refresh/only-export-components */
import { StyledLink } from '../../../../styled-link/styled-link';
import styled from 'styled-components';

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<StyledLink to={'/testing'}>Запустить тест</StyledLink>
			<StyledLink to={'/edit'}>Редактировать тест</StyledLink>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	justify-content: space-evenly;
	padding: 10px;
`;
