import React, { Component } from 'react';
import FormatListNumberedRtlOutlinedIcon from '@mui/icons-material/FormatListNumberedRtlOutlined';
import './Btn.css';

class RankBtn extends Component{
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
    if(this.state.mode === "Rank") btnBgClass = "homeMenuBtnSelected";
    else btnBgClass = "homeMenuBtn";
    return(
      <div className={btnBgClass} onClick={function(){
        this.props.onChangeMode("Rank");
      }.bind(this)}>
        <FormatListNumberedRtlOutlinedIcon className="homeMenuBtnIcon"/>
      </div>
    );
  }
}

export default RankBtn;