import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render(){
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
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div class="SignUpArea">
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