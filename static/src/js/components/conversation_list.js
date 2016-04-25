import React, {Component} from 'react'

class ConversationsList extends Component {

    openConversation(event){
        console.log(event.target);
        this.context.history.pushState(null, `/conversation/${event.target.id}`);
    }
    render(){
        const {conversations, user, dispatch} = this.props;
        let conversationsList = conversations.data.map((conversation) => {
            return (

                <li key={conversation._id} id={conversation._id} aria-layout="column" aria-layout-align="end end" className="collection-item avatar" onClick={this.openConversation.bind(this)}>
                    <i className="material-icons circle indigo darken-3">face</i>
                    <div className="conversation-main" aria-layout="column" aria-layout-align="start end">
                    <span className="title">{conversation.between.filter(user1 => user1._id != user._id)[0].lastName}</span>
                    <p className="brown-text text-lighten-3" aria-layout="row" aria-layout-align="end end">
                        {conversation.messages[0].text}
                    </p>
                            <a className="secondary-content"><span className="unread-count"></span></a>
                            <p className="secondary-content conversation-time">{new Date(conversation.messages[0].timestamp).toTimeString().substring(0,5)}</p>
                    </div>
                </li>
            )
        });
        
        return (
            <div className="grey lighten-5" aria-layout="column" aria-flex="25" aria-layout-align="start end" aria-layout-fill>
                <ul className="right side-nav fixed contacts_menu" aria-layout-fill>
                    <li className="indigo lighten-1 white-text w-full h-xs" aria-layout="row" aria-layout-align="center center">
                        <span className="brown-text text-lighten-4 text-1-5x m-l">Messenger</span>
                    </li>
                    <li aria-layout="column" className="wrapper w-full" aria-layout-align="center center">
                        <div aria-layout="row" aria-layout-align="center center">
                            <span className="brown-text text-lighten-4 text-1-5x">היי {user.lastName}</span>
                        </div>
                    </li>
                    <li aria-layout="column" className="m-t-n w-full">
                        <div aria-layout="row" aria-layout-align="center center">
                            <span className="brown-text text-lighten-3">תתחיל לשלוח הודעות בכיף</span>
                        </div>
                        <ul className="collection">
                            {conversationsList}
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

ConversationsList.contextTypes = {
    history: React.PropTypes.object
};

export default ConversationsList;