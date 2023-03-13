import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import { useSelector, useDispatch } from 'react-redux';
import { selectAuthors } from '../../../../store/authors/selectors';

import {
	addAuthor as addAuthorAction,
	deleteAuthor,
} from '../../../../store/authors/slice';

const Authors = ({ courseAuthors, setCourseAuthors }) => {
	const [authorName, setAuthorName] = useState('');
	const dispatch = useDispatch();
	const authors = useSelector(selectAuthors);

	const addAuthorHandler = (e) => {
		e.preventDefault();
		const { id } = e.target;

		const author = authors.find((author) => author.id === id);
		if (courseAuthors.includes(author)) return false;

		setCourseAuthors((courseAuthors) => [...courseAuthors, author]);
	};

	const removeAuthor = (id) => {
		setCourseAuthors(courseAuthors.filter((author) => author.id !== id));
	};

	const createAuthorHandler = (e) => {
		e.preventDefault();

		if (authorName.length < 2) {
			alert('Please, fill in all fields');
			return;
		}

		dispatch(
			addAuthorAction({
				id: uuidv4(),
				name: authorName,
			})
		);
		setAuthorName('');
	};

	const AuthorsList = ({ authors, buttonText, clickEvent, showDelete }) => {
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
							{showDelete && (
								<Button
									buttonText='Del from store'
									buttonId={'del author' + id}
									onClick={() => {
										dispatch(deleteAuthor(id));
										removeAuthor(id);
									}}
								/>
							)}
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
						onClick={createAuthorHandler}
						buttonId='5'
					></Button>
				</div>
			</div>

			<div className='w-50'>
				<span className='course-form__title'>Authors</span>
				<AuthorsList
					buttonText='Add author'
					authors={authors}
					clickEvent={addAuthorHandler}
					showDelete={true}
				/>

				<span className='course-form__title'>Course Authors</span>
				<AuthorsList
					buttonText='Delete author'
					authors={courseAuthors}
					clickEvent={(e) => {
						e.preventDefault();
						removeAuthor(e.target.id);
					}}
				/>
			</div>
		</div>
	);
};

// Authors.propTypes = {
// 	availableAuthors: PropTypes.array,
// 	courseAuthors: PropTypes.array,
// 	setCourseAuthors: PropTypes.func.isRequired,
// 	setAvailableAuthors: PropTypes.func.isRequired,
// };

export default Authors;
