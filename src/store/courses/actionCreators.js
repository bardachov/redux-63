import { createAction } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

export const addCourse = createAction(actions.COURSES_ADDED);
export const deleteCourse = createAction(actions.COURSES_DELETED);
export const addCoursetoFavorite = createAction('courses/addedtofavorite');

console.log(addCourse.prototype);
