import React, { Component } from 'react';
import './AddWord.css';

class AddWord extends Component{
  render(){
    const guideStyle = {
      fontSize: "23px",
      fontWeight: "700",
    }
    return(
      <div className="addWordBody">
        <span style={guideStyle}>Add a new word:</span><br/>
        <input id="eng" className="addWordInput" type="text" placeholder="English"/>
        <input id="kor" className="addWordInput" type="text" placeholder="Korean"/>
        <button className="addWordBtn" onClick={function(){
          var eng = document.getElementById("eng");
          var kor = document.getElementById("kor");
          this.props.onSubmit(this.props.size, eng.value, kor.value);
          eng.value="";
          kor.value="";
        }.bind(this)}>Add Word</button>
      </div>
    );
  }
}

export default AddWord;