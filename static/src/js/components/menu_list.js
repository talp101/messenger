import React, {Component} from 'react';
import ConversationList from './conversation_list';
import ContactList from './contact_list';
import * as actions from '../actions/actions';

class MenuListContainer extends Component{
    componentWillMount() {
        const { dispatch, user } = this.props;
        dispatch(actions.initConversations(user._id));
    }
    render(){
        const {conversations, user, conversationUnreadCounters, dispatch, contacts} = this.props;

        return(
            <div>
                {contacts.data.length > 0 && <ContactList contacts={contacts} user={user}  dispatch={dispatch} />}
                {conversations.data.length > 0 &&<ConversationList conversations={conversations} user={user} conversationUnreadCounters={conversationUnreadCounters} dispatch={dispatch} />}
            </div>
        )
    }
}

export default MenuListContainer;