/* eslint-disable react-refresh/only-export-components */
import { CircleElement } from '../circle-element/circle-element';
import styled from 'styled-components';

const HistoryElementContainer = ({ className, statistic }) => {
	const correctAns = statistic.answers.filter((ans) => ans.isCorrect === true);

	return (
		<li className={className}>
			<div>{new Date(statistic.date).toLocaleString()}</div>
			<div className="progressBar">
				{statistic.answers.map((item) => (
					<CircleElement key={item.answerId} $ansId={item.isCorrect} />
				))}
			</div>
			<div>
				Верно: {correctAns.length} из {statistic.answers.length}
			</div>
		</li>
	);
};

export const HistoryElement = styled(HistoryElementContainer)`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	border: 1px solid rgba(107, 107, 107, 1);
	border-radius: 5px;
	margin: 0 0 5px 0;

	.progressBar {
		max-width: 612px;
		padding: 5px;
		border: 1px solid rgba(107, 107, 107, 1);
		border-radius: 20px;
		// overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		height: auto;
	}
`;
