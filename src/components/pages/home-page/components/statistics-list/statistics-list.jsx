/* eslint-disable react-refresh/only-export-components */
import { HistoryElement } from './components';

import styled from 'styled-components';

const StatisticsListContainer = ({ className, data = true }) => {
	return (
		<div className={className}>
			{data ? (
				<>
					<h4>История прохождений</h4>
					<ul className="st-list-container__list">
						<HistoryElement />
					</ul>
				</>
			) : (
				<span>Вы еще не проходили тесты</span>
			)}
		</div>
	);
};

export const StatisticsList = styled(StatisticsListContainer)`
	text-align: left;
	padding: 10px;

	.st-list-container__list {
		padding: 0;
	}
`;
