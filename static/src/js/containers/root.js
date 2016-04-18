import React, {PropTypes, Component} from 'react'
import {IndexRoute, Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import AppFrame from '../components/app_frame';
import IndexPage from '../components/index_page';
import configureStore from '../store/configure_store';

const store = configureStore();

class Root extends Component{
    render(){
        const {history} = this.props;
        return (
            <Provider store= {store}>
                <Router history= {history}>
                    <Route path="/" component = {AppFrame}>
                        <IndexRoute component = {IndexPage}/>
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