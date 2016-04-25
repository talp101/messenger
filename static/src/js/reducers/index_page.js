import * as types from '../constants/action_types';

const initialState = {
    user: {}
};
export default function indexPage(state = initialState, action) {
    switch (action.type) {
        case types.SAVE_USER:
            return action.user;
        default:
            return state;
    }
};
