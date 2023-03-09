import * as actions from './actionTypes';

import { mockedAuthorsList as initState } from '../../constants';

export const authorReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.AUTHORS_ADDED: {
			return [...state, action.payload];
		}
		case actions.AUTHOR_DELETED: {
			return state.filter((item) => item.id !== action.payload.id);
		}
		default:
			return state;
	}
};
