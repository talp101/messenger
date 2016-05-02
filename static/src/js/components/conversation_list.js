import React, {Component} from 'react'
import * as actions from '../actions/actions';
import ConversationListItem from './conversation_list_item';

class ConversationsList extends Component {
    openConversation(conversation, event){
        const {dispatch} = this.props;
        dispatch(actions.countUnreadMessagesByConversation(conversation));
        this.context.history.push(`/conversation/${event.target.id}`, null);
        
    }
    render(){
        const {conversations, user, conversationUnreadCounters, dispatch} = this.props;
        let conversationsList = conversations.data.map((conversation, index) => {
            return (
                <ConversationListItem key={index} conversation={conversation} openConversation={this.openConversation.bind(this, conversation)} unreadCounter={conversationUnreadCounters.data[conversation._id]} current_user={user} />
            )
        });
        
        return (
                <li aria-layout="column" className="m-t-n w-full">
                    <ul className="collection">
                        {conversationsList}
                    </ul>
                </li>
        )
    }
}

ConversationsList.contextTypes = {
    history: React.PropTypes.object
};

export default ConversationsList;