import React, {Component} from 'react'

class Conversation extends Component {
    render() {
        const {conversation, user, dispatch} = this.props;
        const messagesList = conversation.data.messages.map((message) => {
            return <li key={message._id}>
                {message.text}
            </li>
        });
        return (
            <div>
                {messagesList}
            </div>
        )

    }
}

export default Conversation;
