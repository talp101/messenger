import React, {Component, PropTypes} from 'react';
import ConversationListContainer from '../containers/conversation_list_container';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';



class AppFrame extends Component{
    componentWillMount() {
        const { dispatch, user } = this.props;
        dispatch(actions.initConversations(user._id));
    }
    render(){
        const {dispatch, user, conversations, conversationUnreadCounters} = this.props;
        return (
            <div aria-layout="row"  aria-layout-fill aria-layout-align="start start">
                <div aria-layout="column" aria-flex aria-layout-fill aria-layout-align="center center" className="h-f-s">
                    {this.props.children}
                </div>
                {conversations.data.length > 0 &&
                <div aria-layout="column" dir="rtl" aria-flex="25" aria-layout-fill aria-layout-align="start end">
                    <ConversationListContainer conversations={conversations} user={user} dispatch={dispatch} conversationUnreadCounters={conversationUnreadCounters}/>
                </div>
                }
            </div>
            )}
}

AppFrame.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        conversations: state.conversations,
        conversationUnreadCounters: state.conversationUnreadCounters,
        user: state.user
    }
}
export default connect(mapStateToProps)(AppFrame);