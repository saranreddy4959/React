import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'supermax'
  }

  userNameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }


  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangedHandler}
                    currentName={this.state.username}/>
        <UserOutput userName = {this.state.username} />
        <UserOutput userName = "Max" />
      </div>
    );
  }
}

export default App;
