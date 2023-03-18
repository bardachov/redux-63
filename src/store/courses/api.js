import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const fetchCourses = createAsyncThunk(
	'courses/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/courses/all');
			return response.data.result;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);
