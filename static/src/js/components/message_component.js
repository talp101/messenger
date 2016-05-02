import React, {Component} from 'react'

class MessageComponent extends Component {
    render() {
        const {message, user} = this.props;
        if(message.user[0] !== user._id) {
            return <div className="row">
                <div className="col s6 m3" dir="rtl">
                    <div className="card blue-grey darken-1 message message-in">
                        <div className="card-content">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            return <div className="row">
                <div className="col s6 m3 margin-message" dir="rtl">
                    <div className="card blue-grey darken-1 message message-out">
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