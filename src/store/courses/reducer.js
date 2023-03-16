import { createReducer } from '@reduxjs/toolkit';

import { addCoursetoFavorite, setFilter } from './actionCreators';
import { fetchCourses, addCourse, deleteCourse } from './api';

export const coursesReducer = createReducer(
	{
		items: [],
		isLoading: false,
		error: null,
		activeFilter: {
			favorite: false,
		},
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
			})
			.addCase(addCoursetoFavorite, (state, action) => {
				const index = state.items.findIndex(({ id }) => id === action.payload);
				const el = state.items[index];

				state.items.splice(index, 1, { ...el, isFavorite: true });
			})
			.addCase(setFilter, (state, action) => {
				const filter = action.payload;
				state.activeFilter[filter.type] = filter.value;
			});
	}
);
