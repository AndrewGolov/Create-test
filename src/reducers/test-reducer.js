const initialAppState = {
	testData: [],
	isLoading: false,
	error: null,
};

export const testReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case 'GET_TEST_DATA': {
			return {
				...state,
				testData: payload,
			};
		}
		default:
			return state;
	}
};
