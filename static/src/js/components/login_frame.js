import React, {Component, PropTypes} from 'react';
import LoginContainer from '../containers/login_container'
import { connect } from 'react-redux';


class LoginFrame extends Component {
    render() {
        const {dispatch, user}  = this.props;
        return (
            <div>
                <LoginContainer dispatch={dispatch} user={user} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginFrame);