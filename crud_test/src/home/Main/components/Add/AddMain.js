import React, { Component } from 'react';
import '../../Main.css';
import './AddMain.css';
import AddWord from './components/AddWord';
import UpdataWord from './components/UpdateWord';
import Footer from './components/Footer';


class AddMain extends Component{
  shouldComponentUpdate(newProps, newState){
    if(this.props.size === newProps.size){
        return false; 
    }
    this.state.size = newProps.size;
    return true;
  }

  constructor(props){
    super(props);
    this.state={
      size: this.props.size,
    };
  }
  render(){
    return(
      <div className="addMainBody">
        <AddWord onSubmit={this.props.onSubmit} size={this.props.size}></AddWord>
        <UpdataWord onSubmit={this.props.onSubmit} size={this.props.size}></UpdataWord>
        <Footer></Footer>
      </div>
    );
  }
}

export default AddMain;