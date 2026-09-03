const initialAppState = {
	testData: [],
	isLoading: false,
};

export const testReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case 'GET_TEST_DATA': {
			console.log('testReducer payload:', payload);
			return {
				...state,
				testData: payload,
			};
		}
		default:
			return state;
	}
};
