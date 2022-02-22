import 'the-new-css-reset/css/reset.css';
import './styles.scss';
import 'airbnb-browser-shims';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('.wrapper'));
