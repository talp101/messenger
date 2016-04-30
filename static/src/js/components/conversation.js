import React, {Component} from 'react';

class Conversation extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {conversation, current_user, openConversation, unreadCounter} = this.props;
        return(
        <li key={conversation._id} id={conversation._id} aria-layout="row" aria-layout-align="space-between start" className="collection-item avatar" onClick={openConversation} dir="rtl">
            <i className="material-icons circle messenger-background" onClick={openConversation}>face</i>
            <div aria-layout="column" aria-layout-align="start start" dir="rtl" onClick={openConversation}>
                <span className="title">{conversation.between.filter(user => user._id != current_user._id)[0].lastName}</span>
                <p className="brown-text text-lighten-3">
                    {conversation.messages[0].text}
                </p>
            </div>
            <div aria-layout="column" aria-layout-align="space-between center">
                {unreadCounter > 0 &&
                <span className="unread-count">{unreadCounter}</span>
                }
                <p className="secondary-content conversation-time">{new Date(conversation.messages[0].timestamp).toTimeString().substring(0,5)}</p>
            </div>
        </li>
        )
    }
}

export default Conversation;