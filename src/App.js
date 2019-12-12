import React from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';

import './App.css';
import Editor from './editor/index';
import Terminal from './terminal/index';
import Guide from './guide/index';
import NavBar from './navbar/index';

function App() {
  return (
    <div className="App"> 
      <div className="nav">
        <NavBar/>
      </div>
      <SplitPane  
        split="vertical" 
        primary="first" 
        defaultSize="50%"
        className="panes"
      >
        <Editor />
        <SplitPane
          split="horizontal"
          primary="first"
          defaultSize="35%"
        >
          <Terminal />
          <Guide />
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default connect()(App);
