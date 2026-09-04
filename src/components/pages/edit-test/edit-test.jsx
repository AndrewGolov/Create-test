/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { selectTestsData } from '../../../selectors';
import { EditQuestionListItem } from './components';
import styled from 'styled-components';

const EditTestContainer = ({ className }) => {
	const dataTest = useSelector(selectTestsData);

	return (
		<div className={className}>
			<h1>Редактирование теста</h1>
			<ul>
				{dataTest.map((test) => (
					<EditQuestionListItem key={test._id} questionData={test} />
				))}
			</ul>
		</div>
	);
};

export const EditTest = styled(EditTestContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100vh;

	& ul {
		list-style: none;
	}
`;
