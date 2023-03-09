import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Authors from './components/Authors/Authors';
import pipeDuration from '../../helpers/pipeDuration';

import './CreateCourse.css';
import { CoursesContext } from '../../providers/CoursesProvider';

export const CreateCourse = () => {
	const { authorsList, setAuthorsList, setCourses } =
		useContext(CoursesContext);

	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);

	const newCourse = () => {
		return {
			id: uuidv4(),
			title: title,
			description: description,
			duration: duration,
			authors: courseAuthors.map(({ id }) => id),
			creationDate: moment().format('MM/DD/YYYY'),
		};
	};

	const createCourse = (e) => {
		e.preventDefault();

		const isError =
			title.length < 2 ||
			description.length < 2 ||
			duration < 1 ||
			courseAuthors.size < 1;
		if (isError) {
			alert('Please, fill in all fields');
			return false;
		}

		setCourses((courses) => [...courses, newCourse()]);
		setAuthorsList([...availableAuthors, ...courseAuthors]);
		navigate('/courses');
	};

	const inputHandler = ({ target }) => {
		const { name, value } = target;

		switch (name) {
			case 'title':
				setTitle(value);
				break;
			case 'description':
				setDescription(value);
				break;
			case 'duration':
				setDuration(value);
				break;
			default:
				break;
		}
	};

	return (
		<main className='container pt-2'>
			<section className='row'>
				<div className='col'>
					<div className='course-form pt-2'>
						<div className='d-flex justify-content-between align-items-center'>
							<div className='course-form__item'>
								<Input
									placeholderText=''
									inputName='title'
									inputId='title'
									inputValue={title}
									labelText='Title'
									onChange={inputHandler}
								/>
							</div>

							<div className='course-form__item'>
								<Button
									buttonId='4'
									buttonText='Create course'
									onClick={createCourse}
								/>
							</div>
						</div>

						<div className='course-form__item'>
							<label htmlFor='description'>Description</label>
							<textarea
								name='description'
								id='description'
								onChange={inputHandler}
								value={description}
							></textarea>
						</div>

						<Authors
							availableAuthors={availableAuthors}
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
							setAvailableAuthors={setAvailableAuthors}
						/>

						<div className='d-flex justify-content-between'>
							<div className='w-50'>
								<span className='course-form__title mt-5'>Duration</span>
								<div className='course-form__item'>
									<Input
										inputType='number'
										inputName='duration'
										inputId='duration'
										labelText='Duration'
										placeholderText='Enter duration in minutes...'
										onChange={inputHandler}
									/>
									<p className='mt-2'>
										Duration: <b>{pipeDuration(duration)}</b> hours
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
