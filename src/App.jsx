import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { routes } from './routes';
import { fetchCourses } from './store/courses/api';
import { fetchAuthors } from './store/authors/api';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAuthors());
		dispatch(fetchCourses());
	}, [dispatch]);

	return <RouterProvider router={routes} />;
}

export default App;
