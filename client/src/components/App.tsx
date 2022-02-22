import React from 'react';

const App = () => {
  return (
    <div className="app">
      <div className="title">
        <h1>Tomorrow</h1>
        <h2>Night</h2>
        <h3>Darkly</h3>
      </div>
      <div className="content">
        <h4>Install Theme</h4>
        <div className="chrome">
          <div className="chrome-icon"></div>
          <div className="chrome-text">Chrome</div>
        </div>
        <div className="firefox">
          <div className="firefox-icon"></div>
          <div className="firefox-text">Firefox</div>
        </div>
      </div>
    </div>
  );
};

export default App;
