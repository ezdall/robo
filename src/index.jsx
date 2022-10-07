import React from 'react';
import ReactDOM from 'react-dom';
//
import { robotData } from './robots';

// import './bootstrap.min.css';
// import './index.css';
//
import App from './containers/App';

ReactDOM.render(<App robotData={robotData} />, document.getElementById('root'));
