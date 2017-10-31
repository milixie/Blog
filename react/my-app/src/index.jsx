import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from '../component/app.jsx';
import './index.scss';

ReactDOM.render(
  <div className="page">
    <Hello />
  </div>,
  document.getElementById('page')
);

