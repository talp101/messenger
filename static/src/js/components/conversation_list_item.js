import React, {Component} from 'react';
import * as Push from 'push.js';

class ConversationListItem extends Component{
    constructor(props){
        super(props);
        this.getContactFullNameFromConversation = this.getContactFullNameFromConversation.bind(this);
        this.calculateUnreadCounterByConversationAndCurrentUserId = this.calculateUnreadCounterByConversationAndCurrentUserId.bind(this);
        this.getContactFullNameFromConversationByCurrentUserId = this.getContactFullNameFromConversationByCurrentUserId.bind(this);
    }

    getContactFullNameFromConversation(conversation, current_user){
      const conversationContact = conversation.between.filter(user => user._id != current_user._id)[0]
      return `${conversationContact.firstName} ${conversationContact.lastName}`;
    }

    getContactFullNameFromConversationByCurrentUserId(conversation, currentUserId){
      const conversationContact = conversation.between.filter(user => user._id != currentUserId)[0]
      return `${conversationContact.firstName} ${conversationContact.lastName}`;
    }

    calculateUnreadCounterByConversationAndCurrentUserId(conversation, currentUserId){
      let amountOfUnreadMessages = 0;
      for (let i = 0; i < conversation.messages.length; i++) {
        if(conversation.messages[i].seenByUsers.indexOf(currentUserId) === -1)
          amountOfUnreadMessages++;
      }
      if(amountOfUnreadMessages > 0){
        let currentConverstaion = conversation;
        let notificationBody = conversation.messages[0].text.length > 20 ? conversation.messages[0].text.substring(0,20) + '...' : conversation.messages[0].text;
        Push.create(`יש לך ${amountOfUnreadMessages} הודעות חדשות מ${this.getContactFullNameFromConversationByCurrentUserId(conversation, currentUserId)}`, {
            body: `${notificationBody}`,
            onClick: (conversation) => {
              window.location = 'http://localhost:3485/conversation/' + currentConverstaion._id;
              Push.clear();
            },
            icon: {
                x16: '/static/src/img/messenger-logo2.png',
                x32: '/static/src/img/messenger-logo2.png'
            },
            timeout: 5000
        });
      }
      return amountOfUnreadMessages;
    }

    render(){
        const {conversation, current_user, openConversation} = this.props;
        const unreadCounter = this.calculateUnreadCounterByConversationAndCurrentUserId(conversation, current_user._id);
        return(
        <li key={conversation._id} id={conversation._id} aria-layout="row" aria-layout-align="space-between start" className="collection-item avatar" onClick={openConversation} dir="rtl">
            <i className="material-icons circle messenger-background">face</i>
            <div aria-layout="column" aria-layout-align="start start" dir="rtl">
                <span className="title">{this.getContactFullNameFromConversation(conversation, current_user)}</span>
                {conversation.messages.length > 0 && <p className="brown-text text-lighten-3">
                    {conversation.messages[0].text.length > 20 ? conversation.messages[0].text.substring(0,20) + '...' : conversation.messages[0].text}
                </p>}
            </div>
            <div aria-layout="column" aria-layout-align="space-between center" onClick={openConversation}>
                {unreadCounter > 0 &&
                <span className="unread-count">{unreadCounter}</span>
                }
                {conversation.messages.length > 0 && <p className="secondary-content conversation-time">{new Date(conversation.messages[0].timestamp).toTimeString().substring(0,5)}</p>}
            </div>
        </li>
        )
    }
}

export default ConversationListItem;
