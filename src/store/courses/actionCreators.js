import * as actions from './actionTypes';

export const addCourse = (newCourse) => {
	return {
		type: actions.COURSES_ADDED,
		payload: newCourse,
	};
};
