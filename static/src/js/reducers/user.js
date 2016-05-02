import * as types from '../constants/action_types';

const initialState = {
    user: {
        userName:'',
        _id:'',
        firstName:'',
        lastName:''
    }
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.SAVE_USER:
            const newUser = action.user;

            return newUser;
        default:
            return state;
    }
};
