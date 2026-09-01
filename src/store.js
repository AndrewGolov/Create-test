import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { testReducer, appReducer } from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ app: appReducer, tests: testReducer });

export const store = createStore(reducer, applyMiddleware(thunk));
