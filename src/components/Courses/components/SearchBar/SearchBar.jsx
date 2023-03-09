import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './SearchBar.css';

const SearchBar = ({ resetCourses, setSearchKey, searchKey, searchCourse }) => {
	const clickHandler = (event) => {
		event.preventDefault();
		searchCourse();
	};

	const inputHandler = ({ target }) => {
		const { value } = target;
		setSearchKey(value);

		if (!value) {
			resetCourses();
		}
	};

	return (
		<div className='col-6'>
			<Input
				placeholderText='Enter course name or id...'
				inputId='searchField'
				inputName='searchField'
				inputValue={searchKey}
				onChange={inputHandler}
			/>
			<Button
				buttonId='3'
				buttonType='button'
				onClick={clickHandler}
				buttonText='Search'
			/>
		</div>
	);
};

// SearchBar.propTypes = {
// 	resetCourses: PropTypes.func.isRequired,
// 	setSearchKey: PropTypes.func.isRequired,
// 	searchCourse: PropTypes.func.isRequired,
// 	searchKey: PropTypes.string,
// };

export default SearchBar;
