import { createBrowserRouter } from 'react-router';
import { HomePage, TestContent, EditTest } from '../components';
import { EditTestController, AddQuestionController } from '../components/pages/edit-test/controllers';

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
	{ path: '/edit-test/:id', element: <EditTestController /> },
	{ path: '/edit-test/add-question', element: <AddQuestionController /> },
	{
		path: '*',
		element: <h1>Page Not Found</h1>,
	},
]);
