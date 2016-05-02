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
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div class="input-field col s12">
                            <input type="text" id="textarea1" ref="message" className="materialize-textarea"/>
                            <label for="textarea1">כתוב הודעה</label>
                            <button type="submit" onClick={this.handleSubmit.bind(this)} ><i className="material-icons dp48">play_arrow</i></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageComposer;