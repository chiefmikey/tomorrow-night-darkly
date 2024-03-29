import React from 'react';
import Img from 'react-cool-img';
import { FiChrome } from 'react-icons/fi';

const App = () => (
  <div className="background">
    <div className="app">
      <div className="title">
        <span className="title-1">Tomorrow</span>
        <span className="title-2">Night</span>
        <span className="title-3">Darkly</span>
      </div>
      <Img
        className="logo"
        alt="Tomorrow Night Darkly logo"
        src="public/assets/img/tomorrow-night-darkly.svg"
        lazy={false}
        decode={false}
      />
      <div className="content">
        <span className="content-title">
          A <span className="simply-dark">Simply Dark</span> Theme
        </span>
        <div className="content-selection">
          <a
            href="https://chrome.google.com/webstore/detail/tomorrow-night-darkly/najhldfogkjhgdaaloddlfdgjfolnoik"
            className="content-option"
            target="_blank"
            rel="noreferrer"
          >
            <div className="chrome-icon">
              <FiChrome />
            </div>
            <span className="content-text">Chrome</span>
          </a>
        </div>
      </div>
      <span className="made-by">
        <a
          href="https://github.com/chiefmikey"
          target="_blank"
          rel="noreferrer"
        >
          Made by Chief Mikey
        </a>
      </span>
    </div>
  </div>
);

export default App;
