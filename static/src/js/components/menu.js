import React, {Component} from 'react';
import AppLogo from './app_logo';
import UserWelcome from './user_welcome';
import SearchPanel from './search_panel';
import MenuListContainer from './menu_list';

class Menu extends Component{
    render(){
        const {user} = this.props;
        return(
            <div>
                <AppLogo />
                <UserWelcome user={user} />
                <SearchPanel />
                <MenuListContainer />
            </div>
        )
    }
}

export default Menu;