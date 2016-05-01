import React, {Component} from 'react';

class UserWelcome extends Component{
    render(){
        const {user} = this.props;
        return(
            <li aria-layout="column" className="wrapper w-full" aria-layout-align="center center">
                <div aria-layout="row" aria-layout-align="center center">
                    <span className="brown-text text-lighten-4 text-1-5x">היי {user.lastName} <small className="brown-text text-lighten-3"> תתחיל לשלוח הודעות בכיף</small></span>
                </div>
            </li>
        )
    }
}

export default UserWelcome;