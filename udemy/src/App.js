import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: 'superman',
    showPersons: false
  }

inputChangeHandler = (event) => {
  this.setState({username: event.target.value})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

  render() {
    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '5px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <UserInput 
          changed={this.inputChangeHandler}
          currentName={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username= 'Joshua' />
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Ways</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
        </header>
      </div>
    );
  }
}

export default App;
