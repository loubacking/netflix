/* eslint-disable no-underscore-dangle */
/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware)
	)

	return store;
}
