import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import './css/index.scss';
// import App from './components/App';
import Router from './components/Router';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// render(<Router />, document.querySelector('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
