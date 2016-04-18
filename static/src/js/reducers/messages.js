import Immutable from 'immutable';

const initialState = Immutable.Map({
    messagesCount: 1
});

export default function messages(state = initialState, action = null) {
    switch (action.type) {
        case 'MESSAGES_COUNT':
            return state.merge({
                messagesCount: action.messagesCount
            });
        default:
            return state;
    }
}