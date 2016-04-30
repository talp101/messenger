import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import ConversationContainer from '../containers/conversation_container';
import MessageComposerContainer from '../containers/message-composer-container';

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
