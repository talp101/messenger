import React, {Component, PropTypes} from 'react';
//import ConversationListContainer from '../containers/conversation_list_container';
import Menu from './menu';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';



class AppFrame extends Component{
    componentWillMount() {
        const { dispatch, user } = this.props;
        dispatch(actions.initConversations(user._id));
    }
    render(){
        const {dispatch, user, conversations, conversationUnreadCounters, contacts} = this.props;
        return (
            <div aria-layout="row"  aria-layout-fill aria-layout-align="start start">
                <div aria-layout="column" aria-flex aria-layout-fill aria-layout-align="center center" className="h-f-s">
                    {this.props.children}
                </div>
                <div aria-layout="column" dir="rtl" aria-flex="25" aria-layout-fill aria-layout-align="start end">
                    <Menu conversations={conversations} user={user} dispatch={dispatch} conversationUnreadCounters={conversationUnreadCounters} contacts={contacts} />
                </div>
            </div>
        )}
}

AppFrame.propTypes = {
    children: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        conversations: state.conversations,
        conversationUnreadCounters: state.conversationUnreadCounters,
        user: state.user,
        contacts: state.contacts,
    }
}
export default connect(mapStateToProps)(AppFrame);