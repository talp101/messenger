import React, {Component, PropTypes} from 'react';

class ConversationHeader extends Component {
    render() {
        const {conversation, current_user} = this.props;
        if(conversation.loaded) {
            let otherUser = conversation.data.between.filter(user => user._id != current_user._id)[0];
            return (
                <div className="grey lighten-2 conversation-header" aria-flex aria-flex="10" aria-layout="row"
                     aria-layout-align="center center">
                    <h4>{`${otherUser.firstName} ${otherUser.lastName}`}</h4>
                </div>
            )
        }
        else{
            return(
                <div className="grey lighten-2 conversation-header" aria-flex aria-flex="10" aria-layout="row"
                     aria-layout-align="center center">
                    <h4>בטעינה</h4>
                </div>
            )
        }
    }
}

export default ConversationHeader;
