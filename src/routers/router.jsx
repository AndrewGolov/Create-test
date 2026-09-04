import { createBrowserRouter } from 'react-router';
import { HomePage, TestContent, EditTest } from '../components';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/testing',
		element: <TestContent />,
	},
	{ path: '/edit-test', element: <EditTest /> },
	{
		path: '*',
		element: <h1>Page Not Found</h1>,
	},
]);
