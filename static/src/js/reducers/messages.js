import {LOAD_MESSAGES, LOAD_MESSAGES_FAIL, LOAD_MESSAGES_SUCCESS} from '../constants/action_types';
import {saveDataToLocalStorage} from '../utils/utils';

const initialState = {
    loaded: false,
    data: {}
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case LOAD_MESSAGES:
            return {...state,
                loading: true
            };
        case LOAD_MESSAGES_FAIL:
            return {...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: state.data
            };
        case LOAD_MESSAGES_SUCCESS:
            const messages = action.messages;
            const conversationId = action.conversationId;
            saveDataToLocalStorage(conversationId.toString(), messages.messages.map(message => {return message._id}));
            return {...state,
                loading: false,
                loaded: true,
                data: messages
            };
        default:
            return state;
    }
}