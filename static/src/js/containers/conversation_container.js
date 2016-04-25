import React, {Component, PropTypes} from 'react';

import ConversationsList from '../components/conversation_list';
import SearchPanel from '../components/search_panel';


class ConversationContainer extends Component{
    componentDidMount(){
        console.log('adsfe');
    }
    render(){
        const {dispatch, user, conversations} = this.props;
        console.log(conversations);
        return (
            <div>
                <ConversationsList conversations={conversations} dispatch={dispatch} user={user}/>
            </div>
        )
    }
}

export default ConversationContainer;
