import React, {Component} from 'react'

class MessageComposer extends Component {
    handleSubmit(event){
        event.preventDefault();
        const { params, user, sendMessage } = this.props;
        if(this.refs.message.value !== ''){
            sendMessage(this.refs.message.value, params.conversationId, user._id);
            this.refs.message.value = '';
        }
    }

    render() {
        return (
            <div className="row m-b-n writer-wrapper" aria-flex aria-flex="15" >
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row p-t-sm">
                        <div className="input-field">
                            <input className="rtl" id="message" type="text" ref="message" placeholder="כתוב הודעה..."/>
                            <button className="btn-floating btn-large waves-effect waves-light blue darken-1" type="submit" onClick={this.handleSubmit.bind(this)}><i className="material-icons">send</i></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageComposer;