import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

function AppRQ() {
	return <RouterProvider router={routes} />;
}

export default AppRQ;
