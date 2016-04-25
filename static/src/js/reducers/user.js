import * as types from '../constants/action_types';
import Immutable from 'immutable';


const initialState = Immutable.Map({
    user: {
        userName:'',
        _id:'',
        firstName:'',
        lastName:''
    }
});

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.SAVE_USER:
            return action.user;
        default:
            return state;
    }
};
