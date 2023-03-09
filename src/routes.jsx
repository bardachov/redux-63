import { createBrowserRouter } from 'react-router-dom';
import { CourseInfo, Courses, CreateCourse, Error } from './components';
import { MainLayout } from './layouts';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Courses />,
			},
			{
				path: '/courses',
				element: <Courses />,
			},
			{
				path: '/courses/:courseId',
				element: <CourseInfo />,
			},
			{
				path: '/courses/add',
				element: <CreateCourse />,
			},
		],
	},
]);
