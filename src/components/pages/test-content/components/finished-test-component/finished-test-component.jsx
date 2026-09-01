/* eslint-disable react-refresh/only-export-components */
import { Button } from '../../../../button/Button';
import { StyledLink } from '../../../../styled-link/styled-link';
import styled from 'styled-components';

const FinishedTestComponentContainer = ({ className, statistic, onRepeatTest }) => (
	<div className={className}>
		<div className="ft-comp__statistic-test">
			<h3 className="ft-comp__statistic-test-title">Правильных ответов</h3>
			<p className="ft-comp__statistic-test-value">
				{statistic.countCorrectAnswers} из {statistic.countQuestions}
			</p>
		</div>
		<div className="ft-comp__action-panel">
			<StyledLink to={'/'} className="ft-comp__home-page-btn" width="220px">
				На главную
			</StyledLink>

			<Button type="button" className="ft-comp__again-btn" onClick={onRepeatTest}>
				Пройти еще раз
			</Button>
		</div>
	</div>
);

export const FinishedTestComponent = styled(FinishedTestComponentContainer)`
	padding: 10px;

	.ft-comp__action-panel {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin: 40px 0;
	}
	.ft-comp__statistic-test-title {
		color: #fff;
		font-size: 28px;
	}
	.ft-comp__statistic-test-value {
		color: #01da37;
		font-size: 38px;
		font-weight: 700;
	}
`;
