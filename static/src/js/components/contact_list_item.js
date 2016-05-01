import React, {Component} from 'react';

class ContactListItem extends Component{
    render(){
        const {contact, current_user, openNewConversation} = this.props;
        return (
            <li key={contact._id} id={contact._id} aria-layout="row" aria-layout-align="space-between start" className="collection-item avatar" onClick={openNewConversation} dir="rtl">
                <i className="material-icons circle messenger-background" onClick={openNewConversation}>face</i>
                <div aria-layout="column" aria-layout-align="start start" dir="rtl" onClick={openNewConversation}>
                    <span className="title">{contact.userName}</span>
                </div>
                <div aria-layout="column" aria-layout-align="space-between center">
                    <p className="secondary-content conversation-time"><i className="material-icons">message</i></p>
                </div>
            </li>
        )
    }
}

export default ContactListItem;