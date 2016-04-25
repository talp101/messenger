import {LOAD_CONVERSATIONS, LOAD_CONVERSATIONS_FAIL, LOAD_CONVERSATIONS_SUCCESS} from '../constants/action_types';

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
            return {...state,
                loading: false,
                loaded: true,
                data: [...state.data, ...action.conversations]
            };
        default:
            return state;
    }
}