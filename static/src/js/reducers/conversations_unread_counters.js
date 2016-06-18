import {COUNT_UNREAD_MESSAGES_INIT, COUNT_UNREAD_MESSAGES_SUCCESS, UPDATED_SEEN_BY_USER_COMPLETED} from '../constants/action_types';
import {orderConversationsByMessagesDate, saveDataToLocalStorage, getDataToLocalStorage} from '../utils/utils';

const initialState = {
    data: {}
};

export default function conversationsUnreadCounters(state = initialState, action) {
    switch (action.type) {
        case COUNT_UNREAD_MESSAGES_INIT:
            let conversationCounters = {};
            action.conversations.forEach(conversation => {
                if(!conversationCounters.hasOwnProperty(conversation._id))
                    conversationCounters[conversation._id] = 0
            });
            return {
                data: conversationCounters
            };
        case COUNT_UNREAD_MESSAGES_SUCCESS:
            let currentConversationsUnreadCounters = state.data;
            currentConversationsUnreadCounters[action.conversation._id] = action.amountOfUnreadMessages;
            return {
                data: currentConversationsUnreadCounters
            };
        case UPDATED_SEEN_BY_USER_COMPLETED:
            return state;
        default:
            return state;
    }
}
