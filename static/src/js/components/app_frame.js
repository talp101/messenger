import React, {Component, PropTypes} from 'react';

class AppFrame extends Component{
    render(){
        return (
            <div>
                <div>{this.props.children}</div>
            </div>

        )
    }
}

AppFrame.propTypes = {
    children: PropTypes.object.isRequired
};

export default AppFrame