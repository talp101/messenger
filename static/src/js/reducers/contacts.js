import {LOAD_CONTACTS, LOAD_CONTACTS_FAIL, LOAD_CONTACTS_SUCCESS} from '../constants/action_types';

const initialState = {
    loaded: false,
    data: []
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONTACTS:
            return {...state,
                loading: true
            };
        case LOAD_CONTACTS_FAIL:
            return {...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: [...state.data]
            };
        case LOAD_CONTACTS_SUCCESS:
            return {...state,
                loading: false,
                loaded: true,
                data: action.contacts
            };
        default:
            return state;
    }
}