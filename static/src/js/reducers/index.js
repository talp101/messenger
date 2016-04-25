import conversations from './conversations';
import user from './user';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    conversations,
    user
});

export default rootReducer;