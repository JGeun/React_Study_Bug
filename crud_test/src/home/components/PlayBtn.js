import React, { Component } from 'react';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import './Btn.css';

class PlayBtn extends Component{
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
    if(this.state.mode === "Play") btnBgClass = "homeMenuBtnSelected";
    else btnBgClass = "homeMenuBtn";
    return(
      <div className={btnBgClass} onClick={function(){
        this.props.onChangeMode("Play");
      }.bind(this)}>
        <PlayCircleFilledWhiteOutlinedIcon className="homeMenuBtnIcon"/>
      </div>
    );
  }
}

export default PlayBtn;