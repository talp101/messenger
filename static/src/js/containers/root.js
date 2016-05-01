import React, {PropTypes, Component} from 'react'
import {IndexRoute, Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import AppFrame from '../components/app_frame';
import IndexPage from '../components/index_page';
import ConversationFrame from '../components/conversation_frame';
import LoginFrame from '../components/login_frame';
import configureStore from '../store/configure_store';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {getDataFromLocalStorage} from '../utils/utils';
import DevTools from '../containers/dev_tools'


const initialState = {
    user: {
        userName: 'talp',
        _id: "571cadca72d7a0e01112c80b",
        firstName: 'טל',
        lastName: 'פרץ'
    },
    conversations: {
        loaded: false,
        data: getDataFromLocalStorage('conversations')
    },
    conversation: {
        loaded: false,
        data: {}
    },
    conversationUnreadCounters: {
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
                        <Route path="/login" component= {LoginFrame} />
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