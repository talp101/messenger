import React, {Component} from 'react';

class Conversation extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {conversation, current_user, openConversation, unreadCounter} = this.props;
        return (
        <li key={conversation._id} id={conversation._id} aria-layout="column" aria-layout-align="end end" className="collection-item avatar" onClick={openConversation.bind(this)}>
            <i id={conversation._id} className="material-icons circle messenger-background" onClick={openConversation.bind(this)}>face</i>
            <div id={conversation._id} className="conversation-main" aria-layout="column" aria-layout-align="start end" onClick={openConversation.bind(this)}>
                <span className="title">{conversation.between.filter(user => user._id != current_user._id)[0].lastName}</span>
                <p className="brown-text text-lighten-3" aria-layout="row" aria-layout-align="end end">
                    {conversation.messages[0].text}
                </p>
                <a className="secondary-content"><span className="unread-count">{(unreadCounter === 0) ? '' : unreadCounter}</span></a>
                <p className="secondary-content conversation-time">{new Date(conversation.messages[0].timestamp).toTimeString().substring(0,5)}</p>
            </div>
        </li>
        )
    }
}

export default Conversation;