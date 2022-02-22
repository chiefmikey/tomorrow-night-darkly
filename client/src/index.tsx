import 'the-new-css-reset/css/reset.css';
import './styles/index.css';
import 'airbnb-browser-shims';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.querySelector('.app'));
