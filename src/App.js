import React from 'react';
import logo from './logo.svg';
import Pipi from './Pipi';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ButtonText: "help me wit a click"
    };
    this.ChangeText = this.ChangeText.bind(this);

  }

  ChangeText () {
    this.setState({ButtonText: "help me with a click"});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Pipi />
            helo me
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button onClick={()=>this.ChangeText()}> {this.state.ButtonText}</Button>
          <a 
            onClick = {(e)=>{
              e.preventDefault();
              console.log('help me');
              }}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
