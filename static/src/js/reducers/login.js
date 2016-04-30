import {SEND_LOGIN, SEND_LOGIN_FAIL, SEND_LOGIN_SUCCESS} from '../constants/action_types';

const initialState = {
    loaded: false,
    loginInfo: {}
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case SEND_LOGIN:
            return {...state,
                loading: true
            };
        case SEND_LOGIN_FAIL:
            return {...state,
                loading: false,
                loaded: false,
                error: action.error,
                loginInfo: state.loginInfo
            };
        case SEND_LOGIN_SUCCESS:
            // save to localstorage
            return {...state,
                loading: false,
                loaded: true,
                loginInfo: action.loginInfo
            };
        default:
            return state;
    }
}