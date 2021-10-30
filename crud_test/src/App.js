import React, { Component } from 'react';
import Login from './login/Login';
import Home from './home/Home';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Home></Home>
      </div>
    );
  }
}

export default App;
