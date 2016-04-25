import React, {Component} from 'react'


class ConversationsList extends Component {

    openConversation(event){
        console.log(event.target);
    }
    render(){
        const {conversations, user, dispatch} = this.props;
        let conversationsList = conversations.data.map((conversation) => {
            return (
                <li key={conversation._id} aria-layout="column" aria-layout-align="end end" className="collection-item avater">
                    <i className="material-icons circle indigo darken-3">face</i>
                    <span className="title">{conversation.between.filter(user1 => user1._id != user._id)[0]}</span>
                    <a className="secondary-content">
                        <i onClick={this.openConversation.bind(this)} className="material-icons pointer grey-text">email</i>
                    </a>
                </li>
            )
        });
        
        return (
            <div>
                <li aria-layout="column" className="m-t-n w-full">
                    <ul className="collection">
                        {conversationsList}
                    </ul>
                </li>
            </div>
        )
    }
}

export default ConversationsList;