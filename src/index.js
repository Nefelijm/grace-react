import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './Main.css';
import Header from './Header';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Main/>, document.getElementById('main'));
registerServiceWorker();
