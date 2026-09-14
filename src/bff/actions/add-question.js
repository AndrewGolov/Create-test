import { postQuestion } from '../api';
import { ACTIONS_TYPE } from './actions-type';

export const addQuestion = (questionData) => (dispatch) =>
	postQuestion(questionData).then((apiResponseData) =>
		dispatch({ type: ACTIONS_TYPE.ADD_QUESTION_TEST, payload: apiResponseData }),
	);
