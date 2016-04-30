import React, {Component} from 'react'

class MessageComposer extends Component {
    render() {
        const {params, user, sendMessage} = this.props;
        console.log(sendMessage);
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"/>
                            <label for="textarea1">כתוב הודעה</label>
                            <i onClick={sendMessage.bind(this, $('#textarea1').val(), user._id, params.conversationId)} className="material-icons dp48">play_arrow</i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageComposer;