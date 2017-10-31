import React from 'react';
import ReactDOM from 'react-dom';

import App from '../component/app.jsx';
// import Example from './component/example.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="root-part"/>, document.getElementById('root'));
// ReactDOM.render(<Example />, document.getElementById('example'));

registerServiceWorker();
