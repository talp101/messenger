import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';


class ConversationHeader extends Component {
    render() {
        const {conversation, current_user} = this.props;
        console.log(conversation);
        return (
            <div className="grey lighten-2 conversation-header" aria-flex aria-layout="row" aria-layout-align="center center">
                <h4>{conversation.between.filter(user => user._id != current_user._id)[0].lastName}</h4>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        current_user: state.user,
        conversation: state.conversation
    }
}

export default connect(mapStateToProps)(ConversationHeader);