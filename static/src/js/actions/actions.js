import * as types from '../constants/action_types';

let conversationsFetcherWorker = false;

export function fetchConversations(user) {
    return (dispatch, getState) => {
        dispatch(requestConversations());
        return fetch(`/api/users/${user}/conversations/`)
            .then(response => response.json())
            .then(conversations => {
                if (JSON.stringify(getState().conversations.data)!==JSON.stringify(conversations)){
                    dispatch(receiveConversations(conversations))
                }
            })
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

export function initConversations(userId) {
    return dispatch => {
                if(conversationsFetcherWorker){
                    conversationsFetcherWorker.terminate();
                    conversationsFetcherWorker = false;
                }
                dispatch(fetchConversations(userId));
                let ConversationsFetcherWorker = require("worker-static-loader?{'staticPath':'static/build/'}!./conversations_fetcher_worker.js")
                conversationsFetcherWorker = new ConversationsFetcherWorker();
                console.log(userId);
                conversationsFetcherWorker.postMessage({userId:userId});
                conversationsFetcherWorker.onmessage = (e) => {
                    dispatch(receiveConversations(e.data.conversations));
                };
        }
}