import React, { Component } from 'react';
import TopBar from './TopBar';
import Body from './Body';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import { FloatingActionButton } from 'material-ui';

class App extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton
          style={{ position: 'fixed', bottom: '2%', right: '1%' }}
        >
          <CommunicationMessage />
        </FloatingActionButton>
        <TopBar />
        <Body />
      </div>
    );
  }
}

export default App;
