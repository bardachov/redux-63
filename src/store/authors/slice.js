import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors, deleteAuthor, addAuthor } from './api';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: {
		items: [],
		isLoading: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAuthors.fulfilled, (state, action) => {
				state.items = action.payload;
			})
			.addCase(deleteAuthor.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					({ id }) => id === action.payload.id
				);
				state.items.splice(index, 1);
			})
			.addCase(addAuthor.fulfilled, (state, action) => {
				state.items.push(action.payload);
			});
	},
});

export const authorReducer = authorsSlice.reducer;
