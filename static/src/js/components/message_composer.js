import React, {Component} from 'react'

class MessageComposer extends Component {
    handleSubmit(event){
        event.preventDefault();
        const { params, user, sendMessage } = this.props;
        sendMessage(this.refs.message.value, params.conversationId, user._id);
        this.refs.message.value = '';
    }

    render() {
        const {params, user, sendMessage} = this.props;
        return (
            <div className="row container">
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div class="input-field col s12">
                            <input className="rtl" id="message" type="text" ref="message" placeholder="כתוב הודעה..."/>
                            <button type="submit" onClick={this.handleSubmit.bind(this)} style={{display: 'none'}}></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageComposer;