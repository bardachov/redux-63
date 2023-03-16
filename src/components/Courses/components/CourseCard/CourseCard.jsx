import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../../../../common/Button/Button';

import { deleteCourse } from '../../../../store/courses/api';
import { addCoursetoFavorite } from '../../../../store/courses/actionCreators';

import './CourseCard.css';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
	id,
	isFavorite,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<article className='courseCard row'>
			<div className='courseCard__description col-7'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			<div className='courseCard__details col-5'>
				<p className='courseCard__authors'>
					<b>Authors:</b>{' '}
					{authors.map(({ name, id }) => (
						<span key={id}>{name}</span>
					))}
				</p>
				<p>
					<b>Duration:</b> {duration} hours
				</p>
				<p>
					<b>Created:</b> {creationDate}
				</p>
				<div>
					<Button
						buttonId='2'
						buttonText='Show course'
						onClick={() => {
							navigate(`/courses/${id}`);
						}}
					/>

					<Button
						buttonText='Del'
						buttonId={`Del-${id}`}
						onClick={() => {
							dispatch(deleteCourse(id));
						}}
					/>

					{!isFavorite && (
						<Button
							buttonText='Add to Fav'
							buttonId={`Fav-${id}`}
							onClick={() => {
								dispatch(addCoursetoFavorite(id));
							}}
						/>
					)}
				</div>
			</div>
		</article>
	);
};

CourseCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	duration: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default CourseCard;
