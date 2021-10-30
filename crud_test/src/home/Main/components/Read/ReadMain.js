import React, { Component } from 'react';
import '../../Main.css';
import './ReadMain.css';
import WordBlock from './components/WordBlock';

class ReadMain extends Component{
  shouldComponentUpdate(newProps, newState){
    const dataProps = this.state.data !== newProps.data;
    const modeProps = newProps.data === "Read";
    return dataProps || modeProps;
  }
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      mode: this.props.mode,
    };
  }
  render(){
    console.log("ReadMain render");
    var lists = [];
    var i = 0;
    var data = this.state.data;
    while(i < data.length){
      lists.push(<li><WordBlock id={data[i].id} data={data[i]} delete={this.props.delete} idx={i}></WordBlock></li>);
      if(i%4==3) lists.push(<br/>);
      i+=1;
    }
    return(
      <div className="readBody">
        <div className="wordBody">
          <nav>
            <ul>
              {lists}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default ReadMain;