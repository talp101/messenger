export function orderConversationsByMessagesDate(conversations){
    return conversations.sort(conversationComparator);

}

function conversationComparator(first_conversation, second_conversation) {
    return new Date(first_conversation.messages[first_conversation.messages.length-1].timestamp) < new Date(second_conversation.messages[second_conversation.messages.length-1].timestamp);
}

export function saveDataToLocalStorage(localStorageKey, data){
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export function getDataFromLocalStorage(localStorageKey){
    const data =  JSON.parse(localStorage.getItem(localStorageKey));
    if (data === null){
        return []
    }
    else
        return data;
}