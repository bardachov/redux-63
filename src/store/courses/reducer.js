import { mockedCoursesList as initState } from '../../constants';
import * as actions from './actionTypes';

export const coursesReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.COURSES_ADDED: {
			return [...state, action.payload];
		}
		case actions.COURSES_DELETED: {
			return state.filter((item) => item.id !== action.payload.id);
		}
		default:
			return state;
	}
};
