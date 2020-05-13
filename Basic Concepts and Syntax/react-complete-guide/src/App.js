import React, { Component } from 'react';

import './App.css';
import Person  from './Person/Person.js';

class App extends Component {
  state ={
    persons: [
      {name: 'Max', age:28},
      {name: 'Saran', age:25},
      {name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'

  }

  switchNameHandler = () => {
    // this.state.persons[0].name = 'Saran Kumar';
    this.setState({persons:[
      {name: 'Saran Kumar', age:29},
      {name: 'Saran', age:25},
      {name: 'Stephanie', age:26}
    ]})
  }
  
  
  render() {

    return (
      <div className="App">
        <h1>Hi, I am a REACT APP</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies </Person>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
