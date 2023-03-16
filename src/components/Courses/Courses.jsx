import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import pipeDuration from '../../helpers/pipeDuration';

import './Courses.css';
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';

export const Courses = () => {
	const navigate = useNavigate();
	const [searchKey, setSearchKey] = useState('');

	const [courses, authors] = useQueries([
		{
			queryKey: 'courses',
			queryFn: () => {
				return axios
					.get('http://localhost:4000/courses/all')
					.then((res) => res.data.result);
			},
			retry: 2,
		},
		{
			queryKey: 'authors',
			queryFn: () => {
				return axios
					.get('http://localhost:4000/authors/all')
					.then((res) => res.data.result);
			},
			retry: 1,
		},
	]);

	const CoursesList = () => {
		return (
			<div className='coursesList'>
				{courses.data.map(
					({
						title,
						description,
						authors: courseAuthors,
						duration,
						creationDate,
						id,
						isFavorite,
					}) => {
						const authorsList = authors.isSuccess
							? authors.data.filter((author) =>
									courseAuthors.includes(author.id)
							  )
							: [];

						return (
							<CourseCard
								id={id}
								title={title}
								description={description}
								authors={authorsList}
								duration={pipeDuration(duration)}
								creationDate={creationDate}
								isFavorite={isFavorite}
								key={id}
								udateCourses={courses.refetch}
							/>
						);
					}
				)}
			</div>
		);
	};

	return (
		<main className='container pt-2'>
			<section className='row'>
				<div className='col'>
					<nav className='row'>
						{/* <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} /> */}

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
					{courses.isLoading && 'Loading...'}
					{courses.isSuccess && <CoursesList />}
				</div>
			</section>
		</main>
	);
};
