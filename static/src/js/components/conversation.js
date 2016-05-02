import React, {Component} from 'react';
import MessageComponent from './message_component';

class Conversation extends Component {
    render() {
        const {conversation, user, dispatch} = this.props;
        const messagesList = conversation.data.messages.map((message) => {
            return <MessageComponent key={message._id} user={user} message={message} />
        });
        return (
            <div className="full-div m-t-xxxl">
                {messagesList}
            </div>
        )

    }
}

export default Conversation;
