import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import pipeDuration from '../../helpers/pipeDuration';
import { selectCourses } from '../../store/courses/selectors';
import { selectAuthors } from '../../store/authors/selectors';

export const CourseInfo = () => {
	const courses = useSelector(selectCourses);
	const authorsList = useSelector(selectAuthors);
	const { courseId } = useParams();

	const course = courses.find((course) => course.id === courseId);

	if (course) {
		const { title, creationDate, description, id, duration } = course;
		const authors = authorsList.filter((author) =>
			course.authors.includes(author.id)
		);

		return (
			<main className='container pt-2'>
				<section className='row'>
					<div className='col-12'>
						<Link to='/courses'>{'< Back to courses'}</Link>
					</div>

					<div className='col-12'>
						<h1 className='text-center mb-5'>{title}</h1>
					</div>

					<div className='col-7'>{description}</div>
					<div className='courseCard__details col-5'>
						<p>
							<b>Id:</b> {id}
						</p>
						<p>
							<b>Duration:</b> {pipeDuration(duration)} hours
						</p>
						<p>
							<b>Created:</b> {creationDate}
						</p>
						<p className='courseCard__authors'>
							<b>Authors:</b>{' '}
							{authors.map(({ name, id }) => (
								<span key={id}>{name}</span>
							))}
						</p>
					</div>
				</section>
			</main>
		);
	} else {
		return (
			<main className='container'>
				<section className='row'>
					<div className='col'>
						<h1>This course doesn't exists!</h1>
						<Link to='/courses'>Go Back</Link>
					</div>
				</section>
			</main>
		);
	}
};
