export const reducer = (state, action) => {
	switch (action.type) {
		case 'added': {
			return [...state, action.payload];
		}
		default:
			return state;
	}
};
