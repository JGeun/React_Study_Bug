import React, { Component } from 'react';
import './UpdateWord.css';

class UpdateWord extends Component{
  render(){
    const guideStyle = {
      fontSize: "23px",
      fontWeight: "700",
    }
    return(
      <div className="updateWordBody">
        <span style={guideStyle}>Update words:</span><br/>
        <input id="idx" className="updateWordInput" type="text" placeholder="Index"/>
        <input id="engUpdate" className="updateWordInput" type="text" placeholder="English"/>
        <input id="korUpdate" className="updateWordInput" type="text" placeholder="Korean"/>
        <button className="updateWordBtn" onClick={function(){
          var idx = document.getElementById("idx");
          var eng = document.getElementById("engUpdate");
          var kor = document.getElementById("korUpdate");
          if(this.props.size <= idx.value){
            alert('단어의 개수보다 큰 index를 입력하셨습니다');
          } 
          else if(isNaN(idx.value)){
            alert('index에 숫자를 입력해주세요.');
          } 
          else{
            console.log(idx.value, eng.value, kor.value);
            this.props.onSubmit(Number(idx.value)-1, eng.value, kor.value);
          } 
          idx.value="";
          eng.value="";
          kor.value="";
        }.bind(this)}>Update Word</button>
      </div>
    );
  }
}

export default UpdateWord;