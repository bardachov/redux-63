import { createReducer } from '@reduxjs/toolkit';
import { mockedCoursesList as initState } from '../../constants';
import { addCourse, addCoursetoFavorite, deleteCourse } from './actionCreators';

// 1. map object method
// export const coursesReducer = createReducer(initState, {
// 	[addCourse]: (state, action) => {
// 		state.push(action.payload);
// 	},
// });

// 2. builder method
export const coursesReducer = createReducer(initState, (builder) => {
	builder
		.addCase(addCourse, (state, action) => {
			state.push(action.payload);
		})
		.addCase(deleteCourse, (state, action) => {
			//1
			const index = state.findIndex(({ id }) => id === action.payload);
			state.splice(index, 1);

			//2
			// return state.filter(({ id }) => id !== action.payload);
		})
		.addCase(addCoursetoFavorite, (courses, action) => {
			//1
			const index = courses.findIndex(({ id }) => id === action.payload);
			const el = courses[index];

			courses.splice(index, 1, { ...el, isFavorite: true });

			//2
			// return state.map((item) => {
			// 	if (item.id === action.payload) {
			// 		return {
			// 			...item,
			// 			isFavorite: true,
			// 		};
			// 	}

			// 	return item;
			// });
		});
});
