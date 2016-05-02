import React, {Component} from 'react';
import AppLogo from './app_logo';
import UserWelcome from './user_welcome';
import SearchPanel from './search_panel';
import MenuListContainer from './menu_list';

class Menu extends Component{
    render(){
        const {conversations, user, conversationUnreadCounters, dispatch, contacts} = this.props;
        return(
            <ul className="right side-nav fixed contacts_menu" aria-layout-fill>
                <AppLogo />
                <UserWelcome user={user} />
                <SearchPanel dispatch={dispatch} user={user}/>
                <MenuListContainer conversations={conversations} user={user} conversationUnreadCounters={conversationUnreadCounters} dispatch={dispatch} contacts={contacts}/>
            </ul>
        )
    }
}

export default Menu;