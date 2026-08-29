/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<button type="button">Запустить тест</button>
			<button type="button">Редактировать тест</button>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
