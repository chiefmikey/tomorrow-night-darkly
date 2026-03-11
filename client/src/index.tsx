import 'the-new-css-reset/css/reset.css';
import './styles.scss';
import 'airbnb-browser-shims';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

createRoot(document.querySelector('.wrapper')!).render(<App />);
