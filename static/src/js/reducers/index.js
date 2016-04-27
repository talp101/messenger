import conversations from './conversations';
import user from './user';
import messages from './messages';
import login from './login';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    conversations,
    user,
    messages,
    login
});

export default rootReducer;