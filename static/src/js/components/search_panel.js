import React, {Component, PropTypes} from 'react';

class SearchPanel extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: ''
        };
    }

    handleChange(event){
        this.setState({ query: event.target.value });
    }
    
    render(){
        const { dispatch} = this.props;
        return (
            <div>
                <div>
                    <input id="search" type="text" value={this.state.query} onChange={this.handleChange.bind(this)} placeholder="חפש..."/>
                </div>
                <div>
                    <p>{this.state.query}</p>
                </div>
            </div>
        )
    }
}

export default SearchPanel;

