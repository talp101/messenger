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
                <input type="text" value={this.state.query} onChange={::this.handleChange}/>
            </div>
        )
    }
}

export default SearchPanel