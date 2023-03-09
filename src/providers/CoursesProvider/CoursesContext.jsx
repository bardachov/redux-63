import { createContext } from 'react';

export const CoursesContext = createContext({
	authorsList: [],
	courses: [],
	setAuthorsList: () => {},
	setCourses: () => {},
});
