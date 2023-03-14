import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors } from './api';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: {
		items: [],
		isLoading: false,
	},
	reducers: {
		addAuthor(state, action) {
			state.push(action.payload);
		},
		deleteAuthor(authors, action) {
			const index = authors.findIndex(({ id }) => id === action.payload);
			authors.splice(index, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.items = action.payload;
		});
	},
	// extraReducers: {
	// 	[fetchAuthors.pending]() {},
	// 	[fetchAuthors.fulfilled](state, action) {
	// 		state.items = action.payload;
	// 	},
	// },
});

export const { addAuthor, deleteAuthor } = authorsSlice.actions;
export const authorReducer = authorsSlice.reducer;
