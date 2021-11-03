import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      mode: "Login",
    };
  }

  getContent(){
    var article = null;
    if(this.state.mode ==="Login"){
      article = <Login onChangeMode={function(){
        this.setState({mode: "Home"});
      }.bind(this)}></Login>;
    }
    else{
      article = <Home></Home>;
    }
    return article;
  }

  render(){
    return(
      <div >
        {this.getContent()};
      </div>
    );
  }
}

export default App;
