import React, { useEffect, useRef } from 'react';
import Img from 'react-cool-img';
import { FiChrome, FiGithub } from 'react-icons/fi';

import { capture } from './telemetry';

const App = (): React.JSX.Element => {
  const hovered = useRef(new Set<string>());

  useEffect(() => {
    capture('landing_viewed', {
      viewport: window.innerWidth < 768 ? 'mobile' : 'desktop',
    });
  }, []);

  const onHover = (target: string): void => {
    if (hovered.current.has(target)) {
      return;
    }
    hovered.current.add(target);
    capture('install_link_hovered', { target });
  };

  return (
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
          onError={() => capture('logo_load_failed')}
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
              onMouseEnter={() => onHover('chrome')}
              onClick={() =>
                capture('install_link_clicked', { target: 'chrome' })
              }
            >
              <div className="chrome-icon">
                <FiChrome />
              </div>
              <span className="content-text">Chrome</span>
            </a>
            <a
              href="https://userstyles.world/style/27011/tomorrow-night-darkly-github"
              className="content-option"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onHover('github')}
              onClick={() =>
                capture('install_link_clicked', { target: 'github' })
              }
            >
              <div className="github-icon">
                <FiGithub />
              </div>
              <span className="content-text">GitHub</span>
            </a>
          </div>
        </div>
        <span className="made-by">
          <a
            href="https://github.com/chiefmikey"
            target="_blank"
            rel="noreferrer"
            onClick={() => capture('author_link_clicked')}
          >
            Made by Chief Mikey
          </a>
        </span>
      </div>
    </div>
  );
};

export default App;
