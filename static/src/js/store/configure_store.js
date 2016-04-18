import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from '../utils/middleware/promise_middleware';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}