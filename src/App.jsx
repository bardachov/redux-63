import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { CoursesProvider } from './providers/CoursesProvider';

import './App.css';
import { routes } from './routes';

function App() {
	return (
		<CoursesProvider>
			<RouterProvider router={routes} />
		</CoursesProvider>
	);
}

export default App;
