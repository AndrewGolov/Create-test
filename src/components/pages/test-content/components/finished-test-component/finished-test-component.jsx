/* eslint-disable react-refresh/only-export-components */
import { Button } from '../../../../button/Button';
import { StyledLink } from '../../../../styled-link/styled-link';
import styled from 'styled-components';

const FinishedTestComponentContainer = ({ className, statistic, onRepeatTest }) => {
	return (
		<div className={className}>
			<div className="ft-comp__statistic-test">{statistic}</div>
			<div className="ft-comp__action-panel">
				<StyledLink to={'/'} className="ft-comp__home-page-btn">
					На главную
				</StyledLink>

				<Button type="button" className="ft-comp__again-btn" onClick={onRepeatTest}>
					Пройти еще раз
				</Button>
			</div>
		</div>
	);
};

export const FinishedTestComponent = styled(FinishedTestComponentContainer)`
	padding: 10px;
`;
