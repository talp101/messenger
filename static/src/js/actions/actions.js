import * as types from '../constants/action_types';
import * as utils from '../utils/utils';

let conversationsFetcherWorker = false;

export function fetchConversations(user) {
    return (dispatch, getState) => {
        dispatch(requestConversations());
        return fetch(`/api/users/${user}/conversations/`)
            .then(response => response.json())
            .then(conversations => {
                if (JSON.stringify(getState().conversations.data)!==JSON.stringify(conversations)){
                    dispatch(receiveConversations(conversations));
                    dispatch(initCountUnreadMessagesByConversations(conversations));
                    dispatch(countUnreadMessagesByConversations(conversations));
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
        return  {
            type: types.LOAD_CONVERSATIONS_SUCCESS,
            conversations
        }
}

export function fetchMessages(conversationId) {
    return dispatch => {
        dispatch(requestMessages())
        return fetch(`/api/conversations/${conversationId}`)
            .then(response => response.json())
            .then(conversation => dispatch(receiveMessages(conversation)))
            .catch(error => {throw error});
    }
}

function requestMessages() {
    return {
        type: types.LOAD_MESSAGES
    }
}

function receiveMessages(conversation, history=null) {
    if(history)
        history.push(`/conversation/${conversation._id}`, null);
    return {
        type: types.LOAD_MESSAGES_SUCCESS,
        conversation
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
                conversationsFetcherWorker.postMessage({userId:userId});
                conversationsFetcherWorker.onmessage = (e) => {
                    dispatch(receiveConversations(e.data.conversations));
                };
        }
}

export function countUnreadMessagesByConversations(conversations){
    return dispatch => {
        conversations.forEach(conversation => {
            const readMessages = utils.getDataFromLocalStorage(conversation._id.toString());
            const amountOfUnreadMessages =  conversation.messages.length - readMessages.length;
            dispatch(receiveCountUnreadMessagesByConversation(amountOfUnreadMessages, conversation));
        });
    }
}

export function countUnreadMessagesByConversation(conversation){
    return dispatch => {
            const readMessages = utils.getDataFromLocalStorage(conversation._id.toString());
            if(readMessages.length === 0)
                dispatch(receiveCountUnreadMessagesByConversation(0, conversation));
            else {
                const amountOfUnreadMessages = conversation.messages.length - readMessages.length;
                dispatch(receiveCountUnreadMessagesByConversation(amountOfUnreadMessages, conversation));
            }
        };
}

function initCountUnreadMessagesByConversations(conversations){
    return {
        type: types.COUNT_UNREAD_MESSAGES_INIT,
        conversations
    }
    
}

function receiveCountUnreadMessagesByConversation(amountOfUnreadMessages, conversation){
    return {
        type: types.COUNT_UNREAD_MESSAGES_SUCCESS,
        amountOfUnreadMessages,
        conversation
    }
}

export function login(username, password){
    return dispatch => {
        dispatch(requestLogin())
        return fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
            .then(loginInfo=>dispatch(receiveLoginInfo(loginInfo)))
            .catch(error=>{throw error})
    }
}

function requestLogin(){
    return {
        type: types.SEND_LOGIN
    }
}

function receiveLoginInfo(loginInfo){
    return {
        type: types.SEND_LOGIN_SUCCESS,
        loginInfo
    }
}

function sendMessageCompleted(conversation, userId) {
    return {
        type: types.SEND_MESSAGE_SUCCESS,
        conversation
    };
}

function sendMessageCompletedAndFetchConversations(conversation, userId){
    return dispatch => {
        return [
          dispatch(fetchConversations(userId)),
          dispatch(sendMessageCompleted(conversation, userId))
      ]
    }


}

export function sendMessage(conversationId, userId, text) {
    let messageRequestBody = {
        userId: userId,
        conversationId: conversationId,
        text: text
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
            .then(conversation => dispatch(sendMessageCompletedAndFetchConversations(conversation, userId)))
            .catch(error => {
                throw error;
            });
    }
}

export function getSocketMessage(msg) {
    return {
        type: types.LOAD_SOCKET_MESSAGE,
        msg
    }
}

export function fetchContactsByQueryAndCurrentUser(query, user) {
    return (dispatch, getState) => {
        if(query.length > 3){
            dispatch(requestContacts());
            return fetch(`/api/contacts?q=${query}`)
                .then(response => response.json())
                .then(contacts => {
                    dispatch(receiveContacts(contacts.filter(contact => contact.userName!=user.userName)))
                })
                .catch(error => {throw error});
        }
        else{
            dispatch(receiveContacts([]));
        }

    }
}

function requestContacts() {
    return {
        type: types.LOAD_CONTACTS
    }
}

function receiveContacts(contacts) {
    return  {
        type: types.LOAD_CONTACTS_SUCCESS,
        contacts
    }
}


function createConversationWithUserId(currentUserId, userId, history) {
    const newConversation = {
        between: [currentUserId, userId]
    };

    return dispatch => {
        return fetch(`/api/conversations`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newConversation)
        }).then(response => response.json())
            .then(conversation => dispatch(createConversationWithUserIdCompleted(conversation, currentUserId, history)))
            .catch(error => {
                throw error;
            });
    }
}

function createNewUserFromContactCompleted(newUser, currentUser, history) {
    return dispatch => {
        dispatch(createConversationWithUserId(newUser._id, currentUser._id, history))
    }
}

function createConversationWithUserIdCompleted(conversation, currentUserId, history){
    return dispatch => {
            dispatch(receiveMessages(conversation, history));
    }
    
}

export function createNewUserFromContact(contact, currentUser, history){
    const newContact = {
        userName: contact.userName,
        firstName: 'tal',
        lastName:'בוט'
    };

    return dispatch => {
        return fetch(`/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        }).then(response => response.json())
            .then(newUser => dispatch(createNewUserFromContactCompleted(newUser, currentUser, history)))
            .catch(error => {
                throw error;
            });
    }
}
