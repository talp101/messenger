
import React, {Component, PropTypes} from 'react';

class IndexPage extends Component{
    render(){
        return (
            <div className="index-page-wrapper" aria-layout="column" aria-fill-layout aria-flex="75">
                <h1 className="index-title">פשוט לדבר</h1>
                <img height="25%" width="25%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png" className="responsive-img messenger-logo"/>
            </div>

        )
    }
}

export default IndexPage