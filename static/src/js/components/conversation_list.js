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
            <ul className="right side-nav fixed contacts_menu" aria-layout-fill>
                <li className="messenger-background white-text w-full h-xs" aria-layout="row" aria-layout-align="center center">
                    <span className="white-text text-1-5x m-l">Messenger</span>
                </li>
                <li aria-layout="column" className="wrapper w-full" aria-layout-align="center center">
                    <div aria-layout="row" aria-layout-align="center center">
                        <span className="brown-text text-lighten-4 text-1-5x">היי {user.lastName}</span>
                    </div>
                </li>
                <li aria-layout="column" className="m-t-n w-full">
                    <div aria-layout="row" aria-layout-align="center center">
                        <span className="brown-text text-lighten-3">תתחיל לשלוח הודעות בכיף</span>
                    </div>
                    <ul className="collection">
                        {conversationsList}
                    </ul>
                </li>
            </ul>
        )
    }
}

ConversationsList.contextTypes = {
    history: React.PropTypes.object
};

export default ConversationsList;