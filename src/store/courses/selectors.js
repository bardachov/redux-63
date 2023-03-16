import { createSelector } from '@reduxjs/toolkit';

export const selectCourses = (state) => state.courses.items;
export const selectFavoriteFilter = (state) =>
	state.courses.activeFilter.favorite;

export const selectFilteredCourses = createSelector(
	[selectCourses, selectFavoriteFilter],
	(courses, favoriteFilter) => {
		return courses.filter((course) => {
			if (favoriteFilter) {
				return course.isFavorite === favoriteFilter;
			} else {
				return !course.isFavorite;
			}
		});
	}
);
