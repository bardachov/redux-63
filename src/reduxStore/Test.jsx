import { useDispatch } from 'react-redux';
const TestComponent = () => {
	const dispatch = useDispatch();
	dispatch({
		type: 'added',
		payload: {
			name: 'name',
		},
	});
};
