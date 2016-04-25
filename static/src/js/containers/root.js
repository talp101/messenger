import React, {PropTypes, Component} from 'react'
import {IndexRoute, Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import AppFrame from '../components/app_frame';
import IndexPage from '../components/index_page';
import ConversationFrame from '../components/conversation_frame';
import configureStore from '../store/configure_store';

const initialState = {
    user: {
        userName: 'shmulikc',
        _id: "571cadca72d7a0e01112c80b",
        firstName: 'שמוליק',
        lastName: 'ציקושווילי'
    },
    conversations: {
        loaded: false,
        data: []
    }, messages: {
        loaded: false,
        data: {}
    }
};

const store = configureStore(initialState);

class Root extends Component{
    render(){
        const {history} = this.props;
        return (
            <Provider store={store}>
                <Router history= {history}>
                    <Route path="/" component = {AppFrame}>
                        <IndexRoute component = {IndexPage}/>
                        <Route path="/conversation/:conversationId" component= {ConversationFrame} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
    history: PropTypes.object.isRequired
};

export default Root;