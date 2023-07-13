import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/webapp' })
ReactDOM.render(<App />, document.getElementById('root'));
