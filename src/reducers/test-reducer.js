import { ACTIONS_TYPE } from '../bff/actions';

const initialAppState = {
	testData: [],
	isLoading: true,
	error: null,
};

export const testReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case ACTIONS_TYPE.ADD_QUESTION_TEST: {
			return {
				...state,
				testData: [...state.testData, payload],
			};
		}
		case ACTIONS_TYPE.GET_TEST_DATA: {
			return {
				...state,
				testData: payload,
				isLoading: false,
			};
		}
		case ACTIONS_TYPE.UPDATE_QUESTION_DATA: {
			const updatedTestData = state.testData.map((question) =>
				question._id === payload._id ? payload : question,
			);

			return { ...state, testData: updatedTestData, isLoading: false };
		}

		case ACTIONS_TYPE.DELETE_TEST_QUESTION: {
			const filteredTestData = state.testData.filter((question) => String(question._id) !== String(payload));
			return {
				...state,
				testData: filteredTestData,
			};
		}
		default:
			return state;
	}
};
