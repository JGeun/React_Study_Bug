import React, { Component } from 'react';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import './Btn.css';

class LogoutBtn extends Component{
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
        return false; 
    }
    this.state.mode = newProps.data;
    return true;
  }

  constructor(props){
    super(props);
    this.state = {
      mode: this.props.data,
    };
  }

  render(){
    var btnBgClass = null;
    if(this.state.mode === "Logout") btnBgClass = "homeMenuBtnSelected";
    else btnBgClass = "homeMenuBtn";
    return(
      <div className={btnBgClass}  onClick={function(){
        this.props.onChangeMode("Logout");
      }.bind(this)}>
        <LogoutOutlined className="homeMenuBtnIcon"/>
      </div>
    );
  }
}

export default LogoutBtn;