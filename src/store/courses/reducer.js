import { createReducer } from '@reduxjs/toolkit';
// import { mockedCoursesList as initState } from '../../constants';
import { addCoursetoFavorite } from './actionCreators';
import { fetchCourses, addCourse, deleteCourse } from './api';

export const coursesReducer = createReducer(
	{
		items: [],
		isLoading: false,
		error: null,
	},
	(builder) => {
		builder
			.addCase(addCourse.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					({ id }) => id === action.payload.id
				);
				state.items.splice(index, 1);
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
