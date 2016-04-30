import {saveDataToLocalStorage} from '../utils/utils';
import {LOAD_MESSAGES, LOAD_MESSAGES_FAIL, LOAD_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_SUCCESS} from '../constants/action_types';

const initialState = {
    loaded: false,
    data: {}
};

export default function messages(state = initialState, action) {
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
            const messages = action.messages;
            const conversationId = action.conversationId;
            saveDataToLocalStorage(conversationId.toString(), messages.messages.map(message => {return message._id}));
            return {
                ...state,
                loading: false,
                loaded: true,
                data: messages
            };
        case SEND_MESSAGE:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.messages
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.conversation
            };
        default:
            return state;
    }
}