import { Loader } from '../../../../loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsloadingTestData, selectTestsData } from '../../../../../selectors';
import { QuestionForm } from '../../components';
import { useParams, useNavigate } from 'react-router';
import { updateQuestion } from '../../../../../bff/actions';

export const EditTestController = () => {
	const testData = useSelector(selectTestsData);
	const isLoading = useSelector(selectIsloadingTestData);
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	if (isLoading) return <Loader />;
	const findedData = params.id ? testData.find((questionData) => String(questionData._id) === params.id) : null;

	const submitEditForm = (updatedQuestionData) => {
		dispatch(updateQuestion(params.id, updatedQuestionData));
		navigate('/edit-test');
	};
	return <QuestionForm editData={findedData} onSubmit={submitEditForm} />;
};
