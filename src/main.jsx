import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { TestApp } from './TestApp.jsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TestApp />,
	},
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
