import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage, TestContent } from './components';
import { Provider } from 'react-redux';
import { store } from './store';
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
	{
		path: '*',
		element: <h1>Page Not Found</h1>,
	},
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
);
