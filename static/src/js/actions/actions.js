import * as types from '../constants/action_types';

export function fetchConversations(user) {
    return dispatch => {
        dispatch(requestConversations())
        return fetch(`/api/users/${user}/conversations/`)
            .then(response => response.json())
            .then(conversations => dispatch(receiveConversations(conversations)))
            .catch(error => {
                throw error
            });
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
            .catch(error => {
                throw error
            });
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

function sendMessageCompleted(conversation) {
    return {
        type: types.SEND_MESSAGE_SUCCESS,
        conversation
    }
}

export function sendMessage(conversationId, userId, text) {
    let messageRequestBody = {
        userId: userId,
        conversationId: conversationId,
        text: 'hi'
    };

    return dispatch => {
        return fetch(`/api/messages`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageRequestBody)
        }).then(response => response.json())
            .then(conversation => dispatch(sendMessageCompleted(conversation)))
            .catch(error => {
                throw error;
            });
    }
}