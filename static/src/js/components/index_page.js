import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class IndexPage extends Component{
    render(){
        return (
        <div className="light-grey wrapper">
            <h2 className="m-t-sm padder center">פשוט לדבר</h2>
            <div className="center padder">
                <div className="container">
                    <img height="25%" width="25%" src="/static/src/img/Facebook_Messenger_logo.svg.png"
                         className="responsive-img"/>
                </div>
            </div>
        </div>
        )
    }
}

IndexPage.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(IndexPage);