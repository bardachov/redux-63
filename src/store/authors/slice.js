import { createSlice } from '@reduxjs/toolkit';
import { mockedAuthorsList as initState } from '../../constants';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: initState,
	reducers: {
		addAuthor(state, action) {
			state.push(action.payload);
		},
		deleteAuthor(authors, action) {
			const index = authors.findIndex(({ id }) => id === action.payload);
			authors.splice(index, 1);
		},
	},
});

export const { addAuthor, deleteAuthor } = authorsSlice.actions;
export const authorReducer = authorsSlice.reducer;
