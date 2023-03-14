import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get('/authors/all');
			return response.data.result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteAuthor = createAsyncThunk(
	'authors/deleteItem',
	async (id, thunkApi) => {
		try {
			const response = await axios.delete(`/authors/${id}`);
			return {
				id,
				message: response.data.result,
			};
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const addAuthor = createAsyncThunk(
	'authors/addItem',
	async (name, thunkApi) => {
		try {
			const response = await axios.post(`/authors/add`, { name });
			return response.data.result;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
