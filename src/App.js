import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// props simply an object giving us access to all the attributes
// Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript

class App extends Component {
  state = {

  }
  render(){
    return (
      <div className="App">
        <h1>Hi1 I'm a React App!</h1>
        <p>This is really working!!</p>
        <button>Switch Name</button>
        <Person name='Max' age='28'/>
        <Person name ='Menu' age='29'>My Hobbies</Person>
        <Person name ='Saerom' age='20'/>
      </div>
    );
  }
}


export default App;
