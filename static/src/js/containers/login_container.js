import React, {Component, PropTypes} from 'react';
import LoginForm from '../components/login_form';
import * as actions from '../actions/actions';


class LoginContainer extends Component{
    
    handleFormSubmit(username, password) {
        console.log(username);
        console.log(password);
        this.props.dispatch(actions.login(username, password))
    }
    render(){
        const {dispatch} = this.props;
        return (
            <div className="card light-grey wrapper z-depth-3">
                <h2 className="m-t-sm padder">לשלוח הודעות בכיף</h2>
                <div className="center padder">
                        <div className="container">
                            <LoginForm handleFormSubmit={this.handleFormSubmit.bind(this)}/>
                        </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer;
