import { useDispatch } from 'react-redux';
import { loadTestAsync } from './bff/actions';
import { RouterProvider } from 'react-router/dom';
import { useEffect } from 'react';
import { router } from './routers/router';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTestAsync());
	}, [dispatch]);

	return <RouterProvider router={router} />;
};
