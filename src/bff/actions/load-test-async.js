import { getTestData } from '../api/get-test-data';
import { ACTIONS_TYPE } from './actions-type';

export const loadTestAsync = () => (dispatch) =>
	getTestData().then((data) => dispatch({ type: ACTIONS_TYPE.GET_TEST_DATA, payload: data }));
