import {saveDataToLocalStorage} from '../utils/utils';
import {LOAD_MESSAGES, LOAD_MESSAGES_FAIL, LOAD_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_SUCCESS, LOAD_SOCKET_MESSAGE} from '../constants/action_types';

const initialState = {
    loaded: false,
    data: {}
};

export default function conversation(state = initialState, action) {
    switch (action.type) {
        case LOAD_MESSAGES:
            return {
                ...state,
                loading: true
            };
        case LOAD_MESSAGES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: state.data
            };
        case LOAD_MESSAGES_SUCCESS:
            const messages = action.conversation.messages;
            const conversationId = action.conversation._id;
            saveDataToLocalStorage(conversationId.toString(), messages.map(message => {return message._id}));
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.conversation
            };
        case SEND_MESSAGE:
            return {
                ...state,
                loading: true
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.conversation
            };
        case LOAD_SOCKET_MESSAGE:
            let currentConversation = state.data;
            currentConversation.messages.push(action.msg);
            return {
                ...state,
                loading: false,
                loaded: true,
                data: currentConversation
            };
        default:
            return state;
    }
}