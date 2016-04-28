import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';
import ConversationsList from '../components/conversation_list';
import SearchPanel from '../components/search_panel';


class ConversationContainer extends Component{
    render(){
        const {dispatch, user, conversations, conversationUnreadCounters} = this.props;
        return (
            <div>
                <ConversationsList conversations={conversations} dispatch={dispatch} conversationUnreadCounters={conversationUnreadCounters} user={user}/>
            </div>
        )
    }
}

export default ConversationContainer;
