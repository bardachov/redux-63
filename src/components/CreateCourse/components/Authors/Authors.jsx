import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const Authors = ({
	availableAuthors,
	courseAuthors,
	setCourseAuthors,
	setAvailableAuthors,
}) => {
	const [authorName, setAuthorName] = useState('');

	const addAuthor = (e) => {
		e.preventDefault();
		const { id } = e.target;
		const author = availableAuthors.find((author) => author.id === id);
		setCourseAuthors((courseAuthors) => [...courseAuthors, author]);
		setAvailableAuthors(availableAuthors.filter((author) => author.id !== id));
	};

	const removeAuthor = (e) => {
		e.preventDefault();
		const { id } = e.target;
		const author = courseAuthors.find((author) => author.id === id);
		setAvailableAuthors((availableAuthors) => [...availableAuthors, author]);
		setCourseAuthors(courseAuthors.filter((author) => author.id !== id));
	};

	const createAuthor = (e) => {
		e.preventDefault();

		if (authorName.length < 2) {
			alert('Please, fill in all fields');
			return;
		}

		const newAuthor = {
			id: uuidv4(),
			name: authorName,
		};

		setAvailableAuthors((availableAuthors) => [...availableAuthors, newAuthor]);
		setAuthorName('');
	};

	const AuthorsList = ({ authors, buttonText, clickEvent }) => {
		return (
			<ul className='authors-list'>
				{authors.map(({ id, name }) => {
					return (
						<li className='authors-list__item' key={id}>
							<span className='authors-list__name'>{name}</span>
							<Button
								buttonText={buttonText}
								buttonId={id}
								onClick={clickEvent}
							/>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<div className='d-flex justify-content-between'>
			<div className='w-50'>
				<span className='course-form__title'>Add author</span>

				<div className='text-center'>
					<div className='course-form__item'>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
							inputName='author'
							inputId='author'
							inputValue={authorName}
							onChange={({ target }) => {
								setAuthorName(target.value);
							}}
						/>
					</div>
					<Button
						buttonText='Create author'
						onClick={createAuthor}
						buttonId='5'
					></Button>
				</div>
			</div>

			<div className='w-50'>
				<span className='course-form__title'>Authors</span>
				<AuthorsList
					buttonText='Add author'
					authors={availableAuthors}
					clickEvent={addAuthor}
				/>

				<span className='course-form__title'>Course Authors</span>
				<AuthorsList
					buttonText='Delete author'
					authors={courseAuthors}
					clickEvent={removeAuthor}
				/>
			</div>
		</div>
	);
};

Authors.propTypes = {
	availableAuthors: PropTypes.array,
	courseAuthors: PropTypes.array,
	setCourseAuthors: PropTypes.func.isRequired,
	setAvailableAuthors: PropTypes.func.isRequired,
};

export default Authors;
