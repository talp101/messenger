import React, {Component, PropTypes} from 'react';


class LoginContainer extends Component{
    render(){
        return (
            <div className="card light-grey">
                <h2>לשלוח הודעות בכיף</h2>
                <div className="center">
                        <div className="container">
                            <div className="input-field">
                                <input className="rtl" id="username" type="text" ref="username" placeholder="שם משתמש"/>
                            </div>
                            <div className="input-field">
                                <input className="rtl" id="password" type="password" ref="password" placeholder="סיסמה"/>
                            </div>
                            <div className="container">
                                <a className="btn messenger-background">התחברות</a>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer;
