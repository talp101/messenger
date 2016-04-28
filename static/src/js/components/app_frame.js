import React, {Component, PropTypes} from 'react';
import ConversationContainer from '../containers/conversation_container';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';



class AppFrame extends Component{
    componentWillMount() {
        const { dispatch, user } = this.props;
        dispatch(actions.initConversations(user._id));
    }
    render(){
        const {dispatch, user, conversations} = this.props;
        return (
                    <div aria-layout="row" aria-flex aria-layout-fill>
                        <div aria-layout="column" aria-flex aria-layout-fill className="wrapper">
                            {this.props.children}
                        </div>
                        {conversations.data.length > 0 &&
                            <ConversationContainer conversations={conversations} user={user} dispatch={dispatch}/>
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
        user: state.user
    }
}
export default connect(mapStateToProps)(AppFrame);