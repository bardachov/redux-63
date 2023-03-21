import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({
	onClick,
	buttonText,
	buttonType = 'button',
	buttonId,
	disabled,
}) => {
	return (
		<button
			className='button'
			onClick={onClick}
			type={buttonType}
			id={buttonId}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	buttonText: PropTypes.string.isRequired,
	buttonType: PropTypes.string,
	buttonId: PropTypes.string.isRequired,
};

export default Button;
