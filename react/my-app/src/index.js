import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import './example.css';
import Example from './example';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App name="root-part"/>, document.getElementById('root'));
ReactDOM.render(<Example />, document.getElementById('example'));

registerServiceWorker();
