import React, {Component} from 'react'

class ConversationComponent extends Component {
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

export default ConversationComponent;
