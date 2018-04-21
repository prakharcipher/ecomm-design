import React, { Component } from 'react';
import { AppBar, FlatButton, TextField, RaisedButton } from 'material-ui';

class TopBar extends Component {
  render() {
    return (
      <AppBar
        title="Greendeck"
        style={{ backgroundColor: 'white' }}
        titleStyle={{ color: '#8080ff', fontFamily: 'helvetica' }}
        zDepth={1}
        iconElementRight={
          <div>
            <FlatButton label="Live Demo" />
            <FlatButton label="Developers" />
            <FlatButton label="Signin" />
            <TextField hintText="Your email" style={{ marginLeft: '5px' }} />
            <RaisedButton label="Get Started" primary={true} />
          </div>
        }
      />
    );
  }
}

export default TopBar;
