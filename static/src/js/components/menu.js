import React, {Component} from 'react';
import AppLogo from './app_logo';
import UserWelcome from './user_welcome';
import SearchPanel from './search_panel';
import MenuListContainer from './menu_list';

class Menu extends Component{
    render(){
        const {conversations, user, conversationUnreadCounters, dispatch, contacts} = this.props;
        if(!user._id){    
            return(
                <ul className="right side-nav fixed contacts_menu" aria-layout-fill>
                    <AppLogo />
                    <li aria-layout="column" className="wrapper w-full" aria-layout-align="center center">
                        <div aria-layout="row" aria-layout-align="center center">
                            <span className="brown-text text-lighten-4 text-1-5x">קדימה להתחבר
                            </span>
                        </div>
                    </li>
                </ul>
            )}
        else{
         return(
             <ul className="right side-nav fixed contacts_menu" aria-layout-fill>
                 <AppLogo />
                 {user._id && <UserWelcome user={user} />}
                 {user._id && <SearchPanel dispatch={dispatch} user={user}/>}
                 {user._id && <MenuListContainer conversations={conversations} user={user} conversationUnreadCounters={conversationUnreadCounters} dispatch={dispatch} contacts={contacts}/>}

             </ul>
         )   
        }
    }
}

export default Menu;