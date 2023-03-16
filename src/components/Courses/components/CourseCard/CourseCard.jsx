import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../../../common/Button/Button';

import './CourseCard.css';
import { useMutation } from 'react-query';
import axios from 'axios';
import { queryClient } from '../../../../index';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
	id,
	isFavorite,
	udateCourses,
}) => {
	const navigate = useNavigate();

	const { mutate } = useMutation(
		(id) => {
			return axios
				.delete(`http://localhost:4000/courses/${id}`)
				.then((res) => res.data.result);
		},
		{
			onSuccess: (resultMessage, id) => {
				udateCourses();
				alert(resultMessage);
			},
		}
	);

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
							return mutate(id);
						}}
					/>

					{!isFavorite && (
						<Button
							buttonText='Add to Fav'
							buttonId={`Fav-${id}`}
							onClick={() => {
								// dispatch(addCoursetoFavorite(id));
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
