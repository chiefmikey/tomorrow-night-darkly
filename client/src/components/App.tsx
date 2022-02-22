import React from 'react';
import { FiChrome } from 'react-icons/fi';
import { RiFirefoxLine } from 'react-icons/ri';

const App = () => {
  return (
    <div className="app">
      <div className="title">
        <div className="title-1">Tomorrow</div>
        <div className="title-2">Night</div>
        <div className="title-3">Darkly</div>
      </div>
      <div className="content">
        <div className="content-title">Install Theme</div>
        <div className="content-selection">
          <a
            href="https://chrome.google.com/webstore/detail/tomorrow-night-darkly/najhldfogkjhgdaaloddlfdgjfolnoik"
            className="content-option"
          >
            <div className="chrome-icon">
              <FiChrome />
            </div>
            <div className="content-text">Chrome</div>
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/tomorrow-night-darkly"
            className="content-option"
          >
            <div className="firefox-icon">
              <RiFirefoxLine />
            </div>
            <div className="content-text">Firefox</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
