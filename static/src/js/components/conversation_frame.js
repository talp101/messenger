import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class ConversationFrame extends Component {
    componentWillMount() {
        const { dispatch, user, messages, params } = this.props;
        dispatch(actions.fetchMessages(params.conversationId));
        console.log(messages);
    }

    render() {
        const { dispatch, user, messages, params } = this.props;

        console.log(messages);
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
        messages: state.messages
    }
}
export default connect(mapStateToProps)(ConversationFrame);