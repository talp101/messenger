import React, {Component} from 'react';
import MessageComponent from './message_component';

class Conversation extends Component {
    render() {
        const {conversation, user, dispatch} = this.props;
        const messagesList = conversation.data.messages.map((message) => {
            //return <li key={message._id}>
            //    {message.text}
            //</li>
            return <MessageComponent key={message._id} user={user} message={message} />
        });
        return (
            <div className="full-div">
                {messagesList}
            </div>
        )

    }
}

export default Conversation;
