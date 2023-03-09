import { useContext } from 'react';
import { CoursesContext } from '../providers/CoursesProvider';

export const useCourses = () => {
	const { courses, authorsList, setCourses, setAuthorsList } =
		useContext(CoursesContext);

	return { courses, authorsList, setCourses, setAuthorsList };
};
