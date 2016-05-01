import conversations from './conversations';
import user from './user';
import conversation from './conversation';
import conversationUnreadCounters from './conversations_unread_counters';
import login from './login';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    conversations,
    user,
    conversation,
    conversationUnreadCounters,
    login
});

export default rootReducer;