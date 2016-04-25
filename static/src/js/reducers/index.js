import conversations from './conversations';
import user from './user';
import messages from './messages';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    conversations,
    user,
    messages
});

export default rootReducer;