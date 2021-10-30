import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import React, { Component } from 'react';
import './Btn.css';

class ReadBtn extends Component{
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
    if(this.state.mode === "Read") btnBgClass = "homeMenuBtnSelected";
    else btnBgClass = "homeMenuBtn";
    return(
      <div className={btnBgClass}  onClick={function(){
        this.props.onChangeMode("Read");
      }.bind(this)}>
        <LibraryBooksOutlinedIcon className="homeMenuBtnIcon"/>
      </div>
    );
  }
}

export default ReadBtn;