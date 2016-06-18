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
            if(msg.conversationId == self.id) {
                dispatch(actions.getSocketMessage(msg.message));
                dispatch(actions.fetchConversations(user._id));
                self.forceUpdate();
            }
        });
    }
    

    componentDidUpdate() {
        if (this.id != this.props.params.conversationId) {
            this.props.dispatch(actions.fetchMessages(this.props.params.conversationId));
            console.log(this.props.params.conversationId);
            this.id = this.props.params.conversationId;
        }
        const messagesList = this.refs.messageList;
        messagesList.scrollTop = messagesList.scrollHeight;
    }

    render() {
        const {dispatch, user, conversation} = this.props;
        return (
            <div className="full-div conversation-container-messages" aria-flex aria-flex="75" aria-layout="column" ref="messageList">
                {
                    conversation.loaded &&
                    <Conversation conversation={conversation} user={user} dispatch={dispatch}/>
                }

            </div>
        )
    }
}


export default ConversationContainer;
