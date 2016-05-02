import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import MessageComposer from '../components/message_composer';

class MessageComposerContainer extends Component {
    componentWillMount() {
        const { dispatch, user, params } = this.props;
    }

    sendMessageDispatch(text, conversationId, userId) {
        const { dispatch, socket } = this.props;

        let newMessage = {
            userId: userId,
            conversationId: conversationId,
            text: text
        };
        dispatch(actions.sendMessage(conversationId, userId, text, socket));
    }

    render() {
        const { dispatch, user, params } = this.props;

        return (
            <MessageComposer params={this.props.params} user={user} sendMessage={this.sendMessageDispatch.bind(this)}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(MessageComposerContainer);