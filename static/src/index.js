import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/containers/root';
import { browserHistory } from 'react-router'



ReactDOM.render(
    <Root history= {browserHistory} />,
    document.getElementById('app')
);