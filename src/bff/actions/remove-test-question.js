import { deleteTestQuestion } from '../api';
import { ACTIONS_TYPE } from './actions-type';

export const removeTestQuestion = (id) => (dispatch) =>
	deleteTestQuestion(id).then(() => dispatch({ type: ACTIONS_TYPE.DELETE_TEST_QUESTION, payload: id }));
