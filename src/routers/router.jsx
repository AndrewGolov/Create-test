import { createBrowserRouter } from 'react-router';
import { HomePage, TestContent, AddQuestionPage, EditTest } from '../components';

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
	{ path: '/add-question', element: <AddQuestionPage /> },
	{
		path: '*',
		element: <h1>Page Not Found</h1>,
	},
]);
