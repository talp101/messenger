import React, {Component} from 'react';
import * as actions from '../actions/actions';

class MessageComponent extends Component {

    componentDidMount(){
        const {message, user, dispatch} = this.props;
        if(message.seenByUsers.indexOf(user._id) === -1){
            dispatch(actions.updateSeenByForMessageByUserId(message._id, user._id))
        }
    }


    render() {
        const {message, user} = this.props;
        if(message.user !== user._id) {
            return <div className="row">
                <div className="col s6 m3">
                    <div className="card message message-in">
                        <div className="card-content" dir="rtl">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            return <div className="row">
                <div className="col s6 m3 margin-message" dir="rtl">
                    <div className="card message message-out">
                        <div className="card-content">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}

export default MessageComponent;
