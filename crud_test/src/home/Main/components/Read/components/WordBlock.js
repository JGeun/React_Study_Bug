import React, { Component } from 'react';
import './WordBlock.css';

class WordBlock extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      eng: this.props.data.eng,
      kor: this.props.data.kor
    }
  }
  render(){
    return(
      <div className="blockStyle" onClick={function(){
        this.props.delete(this.props.idx);
      }.bind(this)}>
        <span className="engWordStyle">{this.state.eng}</span>
        <span className="korWordStyle">{this.state.kor}</span>
      </div>
    );
  }

}

export default WordBlock;