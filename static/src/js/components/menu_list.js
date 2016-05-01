import React, {Component} from 'react';
import ConversationList from './conversation_list';
import ContactList from './contact_list';

class MenuListContainer extends Component{
    render(){
        const {conversations, user, conversationUnreadCounters, dispatch, contacts} = this.props;

        return(
            <div>
                {conversations.data.length > 0 &&<ConversationList conversations={conversations} user={user} conversationUnreadCounters={conversationUnreadCounters} dispatch={dispatch} />}
                {contacts.data.length > 0 && <ContactList contacts={contacts} user={user}  dispatch={dispatch} />}
            </div>
        )
    }
}

export default MenuListContainer;