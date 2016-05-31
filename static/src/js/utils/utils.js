export function orderConversationsByMessagesDate(conversations){
    // return conversations.sort(conversationComparator);
    return conversations;

}

function conversationComparator(first_conversation, second_conversation) {
    return new Date(first_conversation.messages[first_conversation.messages.length-1].timestamp) < new Date(second_conversation.messages[second_conversation.messages.length-1].timestamp);
}

export function saveDataToLocalStorage(localStorageKey, data){
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export function getDataFromLocalStorage(localStorageKey){
    const data =  JSON.parse(localStorage.getItem(localStorageKey));
    if (data === null || data === undefined){
        return []
    }
    else
        return data;
}


export function setToken(token) {
    if (token)
        localStorage.setItem('token', token);
    else
        localStorage.removeItem('token');
}


export function getToken() {
    return localStorage.getItem('token')
}

export function setCurrentUser(user) {
    if (user)
        localStorage.setItem('user', JSON.stringify(user));
    else
        localStorage.removeItem('user');
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}
