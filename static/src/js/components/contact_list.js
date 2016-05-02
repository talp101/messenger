import React, {Component} from 'react'
import * as actions from '../actions/actions';
import ContactListItem from './contact_list_item';

class ContactList extends Component {
    openNewConversation(contact, event){
        const {dispatch, user} = this.props;
        dispatch(actions.createNewUserFromContact(contact, user, this.context.history));
    }


    render(){
        const {contacts, user} = this.props;
        let contactsList = contacts.data.map((contact, index) => {
            return (
                <ContactListItem key={index} contact={contact} openNewConversation={this.openNewConversation.bind(this, contact)}  current_user={user} />
            )
        });

        return (
            <li aria-layout="column" className="m-t-n w-full">
                <h5 className="messenger-title-color">אנשי קשר</h5>
                <ul className="collection">
                    {contactsList}
                </ul>
            </li>
        )
    }
}

ContactList.contextTypes = {
    history: React.PropTypes.object
};

export default ContactList;