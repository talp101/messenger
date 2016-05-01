import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/actions';

class SearchPanel extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: ''
        };
    }

    handleChange(event){
        let query = event.target.value;
        this.setState({ query: event.target.value });
        this.props.dispatch(actions.fetchContactsByQueryAndCurrentUser(query, this.props.user))
    }

    render(){
        return (
        <li aria-layout="column" className="m-t-n w-auto" id="search">
            <div className="input-field container">
                <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} placeholder="חפש..."/>
            </div>
        </li>
        )
    }
}

export default SearchPanel;

