import React, {Component, PropTypes} from 'react';
import ConversationsList from '../components/conversation_list';


class ConversationListContainer extends Component{
    render(){
        const {dispatch, user, conversations, conversationUnreadCounters} = this.props;
        return (
            <div>
                <ConversationsList conversations={conversations} dispatch={dispatch} conversationUnreadCounters={conversationUnreadCounters} user={user}/>
            </div>
        )
    }
}

export default ConversationListContainer;

