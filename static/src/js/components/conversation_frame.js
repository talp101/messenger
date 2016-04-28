import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class ConversationFrame extends Component {
    constructor(props){
        super(props);
        this.id = -1;
    }

    componentWillMount() {
        const { dispatch, user, messages, params, conversations } = this.props;
        dispatch(actions.fetchMessages(params.conversationId));
        dispatch(actions.countUnreadMessagesByConversations(conversations.data));

    }

    componentDidUpdate() {
        if (this.id != this.props.params.conversationId){
            this.props.dispatch(actions.fetchMessages(this.props.params.conversationId));
            this.props.dispatch(actions.countUnreadMessagesByConversations(this.props.conversations.data));
            this.id = this.props.params.conversationId;

        }

    }

    render() {
        const { dispatch, user, messages, params, conversations } = this.props;
        return (
            <div>
                {messages.loaded &&
                    messages.data.messages.map((message) => {
                        return <li>
                            {message.text}
                        </li>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        messages: state.messages,
        conversations: state.conversations
    }
}
export default connect(mapStateToProps)(ConversationFrame);