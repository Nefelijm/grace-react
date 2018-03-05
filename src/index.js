import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './Main.css';
import './Table.css';
import './Content.css';

import Header from './Header';
import Main from './Main';
import Table from './Table';
import Content from './Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Main/>, document.getElementById('main'));
ReactDOM.render(<Table/>, document.getElementById('table'));
ReactDOM.render(<Content />, document.getElementById('content'));
registerServiceWorker();
