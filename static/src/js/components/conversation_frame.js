import React, {Component, PropTypes} from 'react';
import ConversationContainer from '../containers/conversation_container';
import MessageComposerContainer from '../containers/message_composer_container';

class ConversationFrame extends Component {
    render() {
        return (
            <div>
                <ConversationContainer params={this.props.params}/>
                <MessageComposerContainer params={this.props.params} />
            </div>
        )
    }
}

export default ConversationFrame;
