import React, {Component} from 'react'

class Conversation extends Component {
    render() {
        const {messages, user, dispatch} = this.props;
        const messagesList = messages.data.messages.map((message) => {
            return <li>
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
