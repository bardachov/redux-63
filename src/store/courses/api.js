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

export const addCourse = createAsyncThunk(
	'courses/addItem',
	async (newCourse, thunkApi) => {
		try {
			const response = await axios.post('/courses/add', newCourse);
			return response.data.result;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const deleteCourse = createAsyncThunk(
	'courses/deleteItem',
	async (id, thunkApi) => {
		try {
			const response = await axios.delete(`/courses/${id}`);
			return {
				id,
				message: response.data.result,
			};
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
