import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';

import Conversation from '../components/conversation';

class ConversationContainer extends Component {
    constructor(props) {
        super(props);
        this.id = -1;
    }

    componentWillMount() {
        const {dispatch, user, conversation, params, socket } = this.props;
        let self = this;
        socket.on('new socket server', function (msg) {
            if(msg.conversationId == params.conversationId) {
                dispatch(actions.getSocketMessage(msg.message));
                dispatch(actions.fetchConversations(user._id));
                self.forceUpdate();
            }
        });
    }

    componentDidUpdate() {
        if (this.id != this.props.params.conversationId) {
            this.props.dispatch(actions.fetchMessages(this.props.params.conversationId));
            this.id = this.props.params.conversationId;
        }
    }

    render() {
        const {dispatch, user, conversation} = this.props;
        return (
            <div className="full-div">
                {
                    conversation.loaded &&
                    <Conversation conversation={conversation} user={user} dispatch={dispatch}/>
                }

            </div>
        )
    }
}


export default ConversationContainer;
