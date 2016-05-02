import React, {Component, PropTypes} from 'react';
import ConversationContainer from '../containers/conversation_container';
import MessageComposerContainer from '../containers/message_composer_container';

import io from 'socket.io-client';

const socket = io('', { path: '/api/chat' });

class ConversationFrame extends Component {
    render() {
        return (
            <div className="full-div">
                <ConversationContainer params={this.props.params} socket={socket} />
                <MessageComposerContainer params={this.props.params} socket={socket} />
            </div>
        )
    }
}

export default ConversationFrame;
