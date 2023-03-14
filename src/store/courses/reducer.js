import { createReducer } from '@reduxjs/toolkit';
// import { mockedCoursesList as initState } from '../../constants';
import { addCourse, addCoursetoFavorite, deleteCourse } from './actionCreators';
import { fetchCourses } from './api';

export const coursesReducer = createReducer(
	{
		items: [],
		isLoading: false,
		error: null,
	},
	(builder) => {
		builder
			.addCase(addCourse, (state, action) => {
				state.push(action.payload);
			})
			.addCase(deleteCourse, (state, action) => {
				const index = state.findIndex(({ id }) => id === action.payload);
				state.splice(index, 1);
			})
			.addCase(addCoursetoFavorite, (courses, action) => {
				const index = courses.findIndex(({ id }) => id === action.payload);
				const el = courses[index];

				courses.splice(index, 1, { ...el, isFavorite: true });
			})
			.addCase(fetchCourses.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCourses.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			});
	}
);
