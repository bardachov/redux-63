import { createAction } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

export const addCourse = createAction(actions.COURSES_ADDED);
export const deleteCourse = createAction(actions.COURSES_DELETED);
export const addCoursetoFavorite = createAction(
	actions.COURSES_ADDED_TO_FAVORITE
);

export const setFilter = createAction(actions.COURSES_FILTERED);

console.log(addCourse.prototype);
