/* eslint-disable react-refresh/only-export-components */
import { Loader } from '../../loader/Loader';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { removeTestQuestion } from '../../../bff/actions';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { StyledLink } from '../../styled-link/styled-link';
import { selectTestsData, selectIsloadingTestData } from '../../../selectors';
import styled from 'styled-components';

const EditTestContainer = ({ className }) => {
	const testData = useSelector(selectTestsData);
	const isLoading = useSelector(selectIsloadingTestData);
	const dispatch = useDispatch();

	const onDeleteQuestion = (id) => dispatch(removeTestQuestion(id));

	if (isLoading) return <Loader />;

	return (
		<div className={className}>
			<h2>Редактирование теста</h2>
			{testData.length === 0 ? (
				<div>Вопросов теста нет, добавьте первый вопрос</div>
			) : (
				<ol>
					{testData.map((questionData) => (
						<>
							<li key={questionData._id} className="qd-li">
								{questionData.question}
								<div className="action-panel">
									<Link
										to={`/edit-test/${questionData._id}`}
										className="edit-link"
										title="Редактировать вопрос"
									>
										<SlPencil />
									</Link>
									<button
										type="button"
										className="icon-button delete-button"
										onClick={() => onDeleteQuestion(questionData._id)}
										title="Удалить ответ"
									>
										<SlTrash />
									</button>
								</div>
							</li>
						</>
					))}
				</ol>
			)}
			<StyledLink to={'/edit-test/add-question'} margin="0 auto">
				Добавить вопрос
			</StyledLink>
		</div>
	);
};

export const EditTest = styled(EditTestContainer)`
	width: 100%;
	box-sizing: border-box;
	padding-right: 40px;

	.edit-link {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		color: #f1f1f1;
		background: transparent;
		border: none;
		border-radius: 6px;
		font-size: 17px;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.edit-link:hover {
		background: #e7fc045e;
	}

	.action-panel {
		display: flex;
		gap: 5px;
	}

	ol {
		list-style: none;
		counter-reset: question;
	}

	.qd-li {
		counter-increment: question;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 20px;
		margin: 5px 0;

		background: #191a20;
		border: 1px solid #30333d;
		border-radius: 6px;
	}
	.qd-li:hover {
		background: #2b2d36;
	}

	.qd-li::before {
		content: counter(question) '.';
		margin-right: 10px;
	}

	.icon-button {
		width: 36px;
		height: 36px;
		flex: 0 0 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		color: #f1f1f1;
		background: transparent;
		border: none;
		border-radius: 6px;
		font-size: 17px;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.icon-button:hover {
		background: #292b34;
	}

	.delete-button:hover {
		background: #38252a;
		color: red;
	}
`;
