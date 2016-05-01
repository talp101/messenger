import React, {Component} from 'react'

class Conversation extends Component {
    render() {
        const {conversation, user, dispatch} = this.props;
        console.log('conversation component');
        console.log(conversation);
        const messagesList = conversation.data.messages.map((message) => {
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
