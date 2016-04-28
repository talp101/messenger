import conversations from './conversations';
import user from './user';
import messages from './messages';
import conversationUnreadCounters from './conversations_unread_counters';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    conversations,
    user,
    messages,
    conversationUnreadCounters
});

export default rootReducer;