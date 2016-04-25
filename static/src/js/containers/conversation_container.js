import React, {Component, PropTypes} from 'react';

import ConversationsList from '../components/conversation_list';
import SearchPanel from '../components/search_panel';


class ConversationContainer extends Component{
    render(){
        const {dispatch, user, conversations} = this.props;
        return (
            <div>
                <ConversationsList conversations={conversations} dispatch={dispatch} user={user}/>
            </div>
        )
    }
}

export default ConversationContainer;
