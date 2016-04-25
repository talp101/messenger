import {LOAD_MESSAGES, LOAD_MESSAGES_FAIL, LOAD_MESSAGES_SUCCESS} from '../constants/action_types';

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
            return {...state,
                loading: false,
                loaded: true,
                data: action.messages
            };
        default:
            return state;
    }
}