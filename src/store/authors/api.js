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
