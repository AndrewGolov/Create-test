/* eslint-disable react-refresh/only-export-components */
import { ControlPanel } from './components';

import styled from 'styled-components';

const TestAppContainer = ({ className }) => {
	return (
		<div className={className}>
			<h1>Тест</h1>
			<ControlPanel />
		</div>
	);
};

export const TestApp = styled(TestAppContainer)``;
