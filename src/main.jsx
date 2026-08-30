import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage, TestContent } from './components';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/testing',
		element: <TestContent />,
		children: [],
	},
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
