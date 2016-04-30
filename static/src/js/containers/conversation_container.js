import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';

import {connect} from 'react-redux';
import Conversation from '../components/conversation';

class ConversationContainer extends Component {
    constructor(props) {
        super(props);
        this.id = -1;
    }

    componentWillMount() {
        const {dispatch, user, messages, params} = this.props;
        dispatch(actions.fetchMessages(params.conversationId));
    }

    componentDidUpdate() {
        if (this.id != this.props.params.conversationId) {
            this.props.dispatch(actions.fetchMessages(this.props.params.conversationId));
            this.id = this.props.params.conversationId;
        }
    }


    render() {
        const {dispatch, user, messages} = this.props;
        console.log(this.props);
        return (
            <div>
                {
                    messages.loaded &&
                    <Conversation messages={messages} user={user} dispatch={dispatch}/>
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

export default connect(mapStateToProps)(ConversationContainer);
