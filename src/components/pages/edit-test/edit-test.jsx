/* eslint-disable react-refresh/only-export-components */
import { SlPencil } from 'react-icons/sl';
import { Loader } from '../../loader/Loader';
import { useSelector } from 'react-redux';
import { selectTestsData, selectIsloadingTestData } from '../../../selectors';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

const EditTestContainer = ({ className }) => {
	const testData = useSelector(selectTestsData);
	const isLoading = useSelector(selectIsloadingTestData);

	const [clientTestData, setClientTestData] = useState([]);
	console.log(testData);
	if (isLoading) return <Loader />;

	return (
		<div className={className}>
			<h2>Редактирование теста</h2>
			<ul>
				{testData.map((questionData) => (
					<li key={questionData._id}>{questionData.question}</li>
				))}
			</ul>
		</div>
	);
};

export const EditTest = styled(EditTestContainer)`
	width: 100%;
	padding: 30px 20px;
	box-sizing: border-box;
	& ul {
		list-style: none;
	}
`;
