import React, {Component, PropTypes} from 'react';
import ConversationContainer from '../containers/conversation_container';
import MessageComposerContainer from '../containers/message_composer_container';
import ConversationHeader from './conversation_header';

import * as actions from '../actions/actions';
import {connect} from 'react-redux';


import io from 'socket.io-client';

const socket = io('', { path: '/api/chat' });

class ConversationFrame extends Component {
    constructor(props){
        super(props);
        this.id = -1;
    }

    componentWillMount(){
        const {dispatch , params, current_user} = this.props;
        dispatch(actions.fetchMessages(params.conversationId, current_user));
    }

    componentDidUpdate() {
        if (this.id != this.props.params.conversationId) {
            this.props.dispatch(actions.fetchMessages(this.props.params.conversationId, this.props.current_user));
            this.id = this.props.params.conversationId;
        }
    }

    render() {
        const {current_user, conversation, dispatch} = this.props;
        return (
            <div className="full-div h-f-s grey lighten-4">
                <ConversationHeader params={this.props.params} current_user={current_user} conversation={conversation}/>
                <ConversationContainer params={this.props.params} socket={socket} dispatch={dispatch} user={current_user} conversation={conversation}/>
                <MessageComposerContainer params={this.props.params} socket={socket} user={current_user} dispatch={dispatch}/>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        current_user: state.user,
        conversation: state.conversation
    }
}

export default connect(mapStateToProps)(ConversationFrame);
