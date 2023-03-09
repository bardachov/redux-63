import { useState } from 'react';
import { CoursesContext } from './CoursesContext';

import { mockedAuthorsList, mockedCoursesList } from '../../constants';

export const CoursesProvider = ({ children }) => {
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);

	const contextValue = {
		authorsList,
		courses,
		setAuthorsList,
		setCourses,
	};

	return (
		<CoursesContext.Provider value={contextValue}>
			{children}
		</CoursesContext.Provider>
	);
};
