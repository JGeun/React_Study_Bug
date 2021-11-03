import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render(){
    console.log("Login Render");
    return(
      <div className="loginBody">
        <div className="loginTitleArea">
          <div className="loginTitleText">
            Random Words
          </div>
        </div>
        <div className="inputArea">
          <form className="inputForm">
            <div>
              <input type="text" placeholder="Email"></input>
            </div>
            <div>
              <input type="text" placeholder="Password"></input>
            </div>
            <button type="submit" onClick={function(){
              this.props.onChangeMode();
            }.bind(this)}>Sign In</button>
          </form>
        </div>
        <div className="SignUpArea">
          <div>
            <a href="/">Sign Up</a>
            <a href="/">Find Pw</a>
          </div>
        </div>
      </div>
    );
  }  
}

export default Login;