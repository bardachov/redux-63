import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import pipeDuration from '../../helpers/pipeDuration';

import './Courses.css';
import { selectCourses } from '../../store/courses/selectors';
import { selectAuthors } from '../../store/authors/selectors';

const getFilteredCourses = (courses, searchKey) => {
	return courses.filter((course) => {
		const regEx = new RegExp(searchKey, 'gi');

		return regEx.test(course.title);
	});
};

export const Courses = () => {
	const navigate = useNavigate();

	const courses = useSelector(selectCourses);
	const authorsList = useSelector(selectAuthors);

	// const [filteredCourses, setFilteredCourses] = useState(courses);
	const [searchKey, setSearchKey] = useState('');
	const filteredCourses = getFilteredCourses(courses, searchKey);

	// const resetCourses = () => {
	// 	setFilteredCourses(courses);
	// };

	// const searchCourse = () => {
	// if (!searchKey) {
	// 	resetCourses();
	// 	return;
	// }

	// const course = courses.find((course) => {
	// 	return course.id === searchKey;
	// });

	// if (course) {
	// 	setFilteredCourses([course]);
	// 	return;
	// }

	// setFilteredCourses(
	// 	courses.filter((course) => {
	// 		const regEx = new RegExp(searchKey, 'gi');
	// 		return regEx.test(course.title);
	// 	})
	// );
	// };

	const CoursesList = () => {
		return (
			<div className='coursesList'>
				{filteredCourses.length ? (
					filteredCourses.map(
						({
							title,
							description,
							authors: courseAuthors,
							duration,
							creationDate,
							id,
						}) => {
							const authors = authorsList.filter((author) =>
								courseAuthors.includes(author.id)
							);

							return (
								<CourseCard
									id={id}
									title={title}
									description={description}
									authors={authors}
									duration={pipeDuration(duration)}
									creationDate={creationDate}
									key={id}
								/>
							);
						}
					)
				) : (
					<div className='text-center mt-2 mb-2'>No matched courses</div>
				)}
			</div>
		);
	};

	return (
		<main className='container pt-2'>
			<section className='row'>
				<div className='col'>
					<nav className='row'>
						<SearchBar
							// resetCourses={resetCourses}
							searchKey={searchKey}
							setSearchKey={setSearchKey}
							// searchCourse={searchCourse}
						/>

						<div className='col-6 justify-content-end d-flex'>
							<Button
								buttonId='1'
								buttonText='Add new course'
								onClick={() => {
									navigate('/courses/add');
								}}
							/>
						</div>
					</nav>

					<CoursesList />
				</div>
			</section>
		</main>
	);
};
