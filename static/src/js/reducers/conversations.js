import {LOAD_CONVERSATIONS, LOAD_CONVERSATIONS_FAIL, LOAD_CONVERSATIONS_SUCCESS, COUNT_UNREAD_MESSAGES_SUCCESS} from '../constants/action_types';
import {orderConversationsByMessagesDate, saveDataToLocalStorage, getDataToLocalStorage} from '../utils/utils';

const initialState = {
    loaded: false,
    data: []
};




export default function conversations(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONVERSATIONS:
            return {...state,
                loading: true
            };
        case LOAD_CONVERSATIONS_FAIL:
            return {...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: [...state.data]
            };
        case LOAD_CONVERSATIONS_SUCCESS:
            const newData = orderConversationsByMessagesDate([...state.data, ...action.conversations]);
            // saveDataToLocalStorage('conversations', newData);
            return {...state,
                loading: false,
                loaded: true,
                data: newData
            };
        default:
            return state;
    }
}