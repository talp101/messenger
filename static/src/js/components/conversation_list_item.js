import React, {Component} from 'react';

class ConversationListItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {conversation, current_user, openConversation, unreadCounter} = this.props;
        return(
        <li key={conversation._id} id={conversation._id} aria-layout="row" aria-layout-align="space-between start" className="collection-item avatar" onClick={openConversation} dir="rtl">
            <i className="material-icons circle messenger-background" onClick={openConversation}>face</i>
            <div aria-layout="column" aria-layout-align="start start" dir="rtl" onClick={openConversation}>
                <span className="title" onClick={openConversation}>{conversation.between.filter(user => user._id != current_user._id)[0].lastName}</span>
                {conversation.messages.length > 0 && <p className="brown-text text-lighten-3" onClick={openConversation}>
                    {conversation.messages[0].text.length > 20 ? conversation.messages[0].text.substring(0,20) + '...' : conversation.messages[0].text}
                </p>}
            </div>
            <div aria-layout="column" aria-layout-align="space-between center" onClick={openConversation}>
                {unreadCounter > 0 &&
                <span className="unread-count" onClick={openConversation}>{unreadCounter}</span>
                }
                {conversation.messages.length > 0 && <p className="secondary-content conversation-time" onClick={openConversation}>{new Date(conversation.messages[0].timestamp).toTimeString().substring(0,5)}</p>}
            </div>
        </li>
        )
    }
}

export default ConversationListItem;