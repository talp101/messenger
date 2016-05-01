import React, {Component} from 'react';

class MenuListContainer extends Component{
    render(){
        return(
            <li aria-layout="column" className="m-t-n w-full">
                <ul className="collection">
                    {conversationsList}
                </ul>
            </li>
        )
    }
}

export default MenuListContainer;