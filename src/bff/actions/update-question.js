import { updateQuestionData } from '../api';
import { ACTIONS_TYPE } from './actions-type';

export const updateQuestion = (id, modifiedQuestionData) => (dispatch) =>
	updateQuestionData(id, modifiedQuestionData).then((apiResponseData) =>
		dispatch({ type: ACTIONS_TYPE.UPDATE_QUESTION_DATA, payload: apiResponseData }),
	);
//
