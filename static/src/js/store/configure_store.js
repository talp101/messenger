import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../utils/middleware/promise_middleware';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index';
const loggerMiddleware = createLogger();


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}