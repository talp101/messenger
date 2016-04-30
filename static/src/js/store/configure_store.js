import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../utils/middleware/promise_middleware';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index';
import DevTools from '../containers/dev_tools';

const loggerMiddleware = createLogger();


const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunkMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}