/* eslint-disable react-refresh/only-export-components */
import { ControlPanel, StatisticsList } from './components';
import styled from 'styled-components';

const HomePageContainer = ({ className }) => {
	return (
		<div className={className}>
			<h1>Статистика</h1>
			<ControlPanel />
			<StatisticsList />
		</div>
	);
};

export const HomePage = styled(HomePageContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100vh;
`;
