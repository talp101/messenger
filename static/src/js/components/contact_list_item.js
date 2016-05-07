import React, {Component} from 'react';

class ContactListItem extends Component{
    render(){
        const {contact, current_user, openNewConversation} = this.props;
        return (
            <li key={contact._id} id={contact._id} aria-layout="row" aria-layout-align="space-between start" className="collection-item avatar" onClick={openNewConversation} dir="rtl">
                <i className="material-icons circle messenger-background" onClick={openNewConversation}>face</i>
                <div aria-layout="column" aria-layout-align="start start" dir="rtl" onClick={openNewConversation}>
                    <span className="title" onClick={openNewConversation}>{contact.firstName + ' ' + contact.lastName}</span>
                </div>
                <div aria-layout="column" aria-layout-align="space-between center" onClick={openNewConversation}>
                    <p className="secondary-content conversation-time" onClick={openNewConversation}><i className="material-icons" onClick={openNewConversation}>message</i></p>
                </div>
            </li>
        )
    }
}

export default ContactListItem;