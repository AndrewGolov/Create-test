/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { CircleElement } from '../circle-element/circle-element';

import styled from 'styled-components';

const HistoryElementContainer = ({ className, date = '12.07.2026' }) => {
	const [answers, setAnswers] = useState([
		1, -1, 1, 0, -1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
	]); /*todo получение данных с ID ответа*/
	const correctAns = answers.filter((ansId) => ansId === 1);

	return (
		<li className={className}>
			<div>{date}</div>
			<div className="progressBar">
				{answers.map(($ansId, i) => (
					<CircleElement key={i} $ansId={$ansId} />
				))}
			</div>
			<div>
				Верно: {correctAns.length} из {answers.length}
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
