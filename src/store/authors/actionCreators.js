import * as actions from './actionTypes';

export const addAuthor = (newAuthor) => {
	return {
		type: actions.AUTHORS_ADDED,
		payload: newAuthor,
	};
};
