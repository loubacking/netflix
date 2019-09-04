import { DISCOVER_MOVIES_REQUEST, DISCOVER_MOVIES_SUCCESS, DISCOVER_MOVIES_FAILED } from './types';

const INITAL_STATE = {
	discover: {}
}

const rootReducer = (state = INITAL_STATE, action) => {
	switch (action.type) {
		case DISCOVER_MOVIES_SUCCESS:
			return { ...state, discover: action.payload };
		default:
			return state;
	}
};
export default rootReducer;
