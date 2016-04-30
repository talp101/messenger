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

export function fetchMessages(conversationId) {
    return dispatch => {
        dispatch(requestMessages())
        return fetch(`/api/conversations/${conversationId}`)
            .then(response => response.json())
            .then(messages => dispatch(receiveMessages(messages)))
            .catch(error => {throw error});
    }
}

function requestMessages() {
    return {
        type: types.LOAD_MESSAGES
    }
}

function receiveMessages(messages) {
    return {
        type: types.LOAD_MESSAGES_SUCCESS,
        messages
    }
}

export function sendMessage(conversationId, userId, text) {
    let messageRequestBody = {
        userId: userId,
        conversationId: conversationId,
        text: 'hi'
    };

    let data = new FormData();
    data.append( "json", JSON.stringify( messageRequestBody ) );

    console.log('message ' + messageRequestBody.conversationId);
    return dispatch => {
        return fetch(`/api/messages`, {
            method: 'POST',
            body: data
        }).then(response => response.json())
        .catch(error => { throw error; });
    }
}