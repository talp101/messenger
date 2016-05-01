import React, {Component} from 'react';

class AppLogo extends Component{
    render(){
        return(
            <li className="messenger-background white-text w-full h-xs" aria-layout="row" aria-layout-align="center center">
                <span className="white-text text-1-5x m-l">Messenger</span>
            </li>
        )
    }
}

export default AppLogo;