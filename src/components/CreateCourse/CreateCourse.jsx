import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Authors from './components/Authors/Authors';
import pipeDuration from '../../helpers/pipeDuration';

import { addCourse } from '../../store/courses/api';

import './CreateCourse.css';

export const CreateCourse = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const createCourse = (e) => {
		e.preventDefault();

		dispatch(
			addCourse({
				title: title,
				description: description,
				duration: duration,
				authors: courseAuthors.map(({ id }) => id),
			})
		);

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
				setDuration(Number(value));
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
							// availableAuthors={[]}
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
							// setAvailableAuthors={() => {}}
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
