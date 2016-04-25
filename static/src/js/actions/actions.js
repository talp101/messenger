import * as types from '../constants/action_types';

export function fetchConversations(user) {
    return dispatch => {
        dispatch(requestConversations())
        return fetch(`/api/users/${user}/conversations/`)
            .then(response => response.json())
            .then(conversations => dispatch(receiveConversations(conversations)))
            .catch(error => {throw error});
    }
}

function requestConversations() {
    return {
        type: types.LOAD_CONVERSATIONS
    }
}

function receiveConversations(conversations) {
    return {
        type: types.LOAD_CONVERSATIONS_SUCCESS,
        conversations
    }
}