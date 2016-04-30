import React, {Component} from 'react';
import * as actions from '../actions/actions';



class LoginForm extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit(event){
        this.props.handleFormSubmit(this.refs.username.value, this.refs.password.value);
    }

    render(){
        const {dispatch} = this.props;
        return (
        <form>
            <div className="input-field">
                <input className="rtl" id="username" type="text" ref="username" placeholder="שם משתמש"/>
            </div>
            <div className="input-field">
                <input className="rtl" id="password" type="password" ref="password" placeholder="סיסמה"/>
            </div>
            <div className="container">
                <a className="btn messenger-background m-b-sm" onClick={this.handleSubmit.bind(this)}>התחברות</a>
            </div>
        </form>
        )
    }
}

export default LoginForm;