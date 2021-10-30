import React, { Component } from 'react';
import './Home.css';
import PlayBtn from './components/PlayBtn';
import RankBtn from './components/RankBtn';
import AddBtn from './components/AddBtn';
import ReadBtn from './components/ReadBtn';
import LogoutBtn from './components/LogoutBtn';
import Main from './Main/Main';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'Play',
    };
  }

  changeMode(_mode){
    this.setState({
      mode: _mode
    })
  }

  render(){
    console.log("Home render", this.state.mode);
    return(
      <div className="homeBody">
        <div className="topbanner">
          <div className="homeTitleText">
            Random Words
          </div>

          <div className="userArea">
            <div className="userProfile"><img src="../logo192.png"/><span>유저</span>님 환영합니다</div>
          </div>
        </div>
        <div className="mainScreen">
          <div className="homeMenuBar">
            <div className="homeMenu">
              <PlayBtn onChangeMode={this.changeMode.bind(this)} data={this.state.mode}></PlayBtn>
              <RankBtn onChangeMode={this.changeMode.bind(this)} data={this.state.mode}></RankBtn>
              <AddBtn onChangeMode={this.changeMode.bind(this)} data={this.state.mode}></AddBtn>
              <ReadBtn onChangeMode={this.changeMode.bind(this)} data={this.state.mode}></ReadBtn>
              <LogoutBtn onChangeMode={this.changeMode.bind(this)} data={this.state.mode}></LogoutBtn>
            </div>
          </div>
          <Main className="homeMain" mode={this.state.mode}></Main>
        </div>
      </div>
    );
  }
}

export default Home;
