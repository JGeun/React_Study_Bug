import { duration } from '@material-ui/core';
import React, { Component } from 'react';
import '../../Main.css';
import './PlayMain.css';

class PlayMain extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var btnStart = "startBtn";

    return(
      <div className="playArea">
        <div id="startBtn" className={btnStart} onClick={function(){
          var btn = document.getElementById("startBtn");
          var lol = document.getElementById("lol");
          console.log(btn.innerText);
          if(btn.innerText === "START"){
            btn.className = "hidden";
            lol.className= "lol";
          }
        }.bind(this)}>START</div>

        <div id="lol" className="hidden">아직 아무것도 없어요ㅋㅋ</div>
      </div>
    );
  }
}

export default PlayMain;