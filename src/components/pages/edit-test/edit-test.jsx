/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { selectTestsData, selectIsloadingTestData } from '../../../selectors';
import { StyledLink } from '../../styled-link/styled-link';
import { EditQuestionListItem } from './components';
import { Loader } from '../../loader/Loader';
import styled from 'styled-components';

const EditTestContainer = ({ className }) => {
	const dataTest = useSelector(selectTestsData);
	const isLoadingDataTest = useSelector(selectIsloadingTestData);

	if (isLoadingDataTest) return <Loader />;

	return (
		<div className={className}>
			<h1>Редактирование теста</h1>
			<ul>
				{dataTest.map((questionData) => (
					<EditQuestionListItem key={questionData._id} questionData={questionData} />
				))}
			</ul>
			<StyledLink to={'/add-question'} className="add-btn">
				Добавить вопрос
			</StyledLink>
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
	.add-btn {
		align-self: center;
	}
`;
