/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { selectTestsData, selectIsloadingTestData } from '../../../selectors';
import { EditQuestionListItem } from './components';
import { Loader } from '../../loader/Loader';
import styled from 'styled-components';

const EditTestContainer = ({ className }) => {
	const dataTest = useSelector(selectTestsData);
	const isLoadingDataTest = useSelector(selectIsloadingTestData);

	return (
		<div className={className}>
			{isLoadingDataTest ? (
				<Loader />
			) : (
				<>
					<h1>Редактирование теста</h1>
					<ul>
						{dataTest.map((oneOfQuestionList) => (
							<EditQuestionListItem key={oneOfQuestionList._id} oneOfQuestionList={oneOfQuestionList} />
						))}
					</ul>
				</>
			)}
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
