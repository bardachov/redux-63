import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
	placeholderText,
	labelText = '',
	inputType = 'text',
	inputId,
	onChange,
	inputName,
	inputValue,
}) => {
	return (
		<>
			<label htmlFor={inputId}>{labelText}</label>
			<input
				placeholder={placeholderText}
				type={inputType}
				id={inputId}
				onChange={onChange}
				name={inputName}
				value={inputValue}
			/>
		</>
	);
};

Input.propTypes = {
	onChange: PropTypes.func,
	inputName: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	inputValue: PropTypes.string,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	inputId: PropTypes.string.isRequired,
};

export default Input;
