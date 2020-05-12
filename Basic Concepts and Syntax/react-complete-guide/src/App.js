import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person  from './Person/Person.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hi, I am a REACT APP</h1>
        <Person name='Max' age="28"> My Hobbies </Person>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
