let interval = false;
let userId = 0;
let conversations = [];

self.onmessage = function(e) {
    if (!interval) {
        userId = e.data.userId;
        interval = setInterval(()=>checkForNewConversations(userId), 10000);
    }

    else{
        clearInterval(interval);
        interval = setInterval(()=>checkForNewConversations(userId), 10000);
    }

};

function checkForNewConversations (userId){
    fetch(`/api/users/${userId}/conversations/`)
        .then(response => response.json())
        .then(conversations => {
            let newConversations = conversations;
            if (!JSON.stringify(conversations)===JSON.stringify(newConversations)){
                postMessage({conversations: newConversations});
                console.log('updating conversations')
            }
            conversations = newConversations;

        })
}
