import React, { Component } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import './Btn.css';

class AddBtn extends Component{
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
    if(this.state.mode === "Add") btnBgClass = "homeMenuBtnSelected";
    else btnBgClass = "homeMenuBtn";
    return(
      <div className={btnBgClass}  onClick={function(){
        this.props.onChangeMode("Add");
      }.bind(this)}>
        <AddBoxOutlinedIcon className="homeMenuBtnIcon"/>
      </div>
    );
  }
}

export default AddBtn;