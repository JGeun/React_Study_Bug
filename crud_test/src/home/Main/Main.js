import React, { Component } from 'react';
import PlayMain from './components/Play/PlayMain';
import RankMain from './components/Rank/RankMain';
import AddMain from './components/Add/AddMain';
import ReadMain from './components/Read/ReadMain';

class Main extends Component{
  shouldComponentUpdate(newProps, newState){
    if(this.props.mode !== newProps.mode){
      if(newProps.mode === "Logout") return false;
      this.state.mode = newProps.mode;
      return true;
    }else if(this.state.contents !== newState.contents){
        this.state.contents = newState.contents;
        return true;
    }
    return false;
    
  }

  constructor(props){
    super(props);
    this.state = {
      mode: this.props.mode,
      contents: [
        {id: 1, eng: "culture", kor: "문화"}, {id: 2, eng: "experience", kor: "경험"}, {id: 3, eng: "education", kor: "교육"}, 
        {id: 4, eng: "symbol", kor: "상징"}, {id: 5, eng: "effect", kor: "결과, 영향"}, {id: 6, eng: "liberty", kor: "자유"}, 
        // {id: 7, eng: "affair", kor: "사건, 일"}, {id: 8, eng: "comfort", kor: "안락, 위안"}, {id: 9, eng: "tradition", kor: "전통, 전설"},
        // {id: 10, eng: "subject", kor: "학과, 주제"}, {id: 11, eng: "object", kor: "사물, 목적, (동)반대하다"}, 
        // {id: 12, eng: "source", kor: "출처, 근원"}, {id: 13, eng: "revolution", kor: "혁명"}, {id: 14, eng: "pollution", kor: "오염"}, 
        // {id: 15, eng: "system", kor: "조직, 체계, 지도"}, {id: 16, eng: "triumph", kor: "승리"}, {id: 17, eng: "respect", kor: "존경, 존경하다"},
        // {id: 18, eng: "communication", kor: "전달, 교통"}, {id: 19, eng: "foundation", kor: "기초"}, {id: 20, eng: "glory", kor: "영광"},
        // {id: 21, eng: "situation", kor: "위치, 상황"}, {id: 22, eng: "competition", kor: "경쟁"}, {id: 23, eng: "prairie", kor: "대초원"}, 
        // {id: 24, eng: "effort", kor: "노력"}, {id: 25, eng: "section", kor: "부분, 구역"}, {id: 26, eng: "rein", kor: "고삐"}, 
        // {id: 27, eng: "solution", kor: "해결, 용해"}, {id: 28, eng: "honor", kor: "명예/경의, 존경하다"}, {id: 29, eng: "unity", kor: "통일/일치"},  
        // {id: 30, eng: "population", kor: "인구"}, {id: 31, eng: "ruin", kor: "파멸"}, {id: 32, eng: "monument", kor: "기념비, 기념물"}, 
        // {id: 33, eng: "information", kor: "정보, 지식, 통지"}, {id: 34, eng: "sophomore", kor: "학년생"}, 
        // {id: 35, eng: "temperature", kor: "온도, 체온"}, {id: 36, eng: "limit" ,kor: "제한하다, 한계, 제한"}, {id: 37, eng: "statue", kor: "조각상"}, 
        // {id: 38, eng: "furniture", kor: "가구"}, {id: 39, eng: "parade", kor: "행렬"}, {id: 40, eng: "public", kor: "공중(사회), 공중의"},
      ],
      contents_id: 6
    };
  }

  getContent(){
    var components = null;
    if(this.state.mode === "Play"){
      components = <PlayMain></PlayMain>
    }else if(this.state.mode === "Rank"){
      components = <RankMain></RankMain>
    }else if(this.state.mode === "Read"){
      components = <ReadMain data={this.state.contents} mode={this.state.mode} delete={function(_idx){
        console.log("click- Main.js", _idx);
        var _contents = Array.from(this.state.contents);
        _contents.splice(_idx, 1);
        this.setState({
          contents: _contents,
          mode: "Read"
        });
      }.bind(this)}></ReadMain>
    }
    else if(this.state.mode === "Add"){
      components = <AddMain onSubmit={function(_idx, _eng, _kor){
        var _contents = Array.from(this.state.contents);
        var contentsSize = this.state.max_contents_id+1;
        if(_idx < _contents.length){
          _contents.splice(Number(_idx), 1, {id: this.contentsSize, eng: _eng, kor: _kor});
        }else{
          _contents.push({id:Number(this.contentsSize), eng: _eng, kor: _kor});
        }
        this.setState({
          contents : _contents,
          contents_id: contentsSize,
        });
      }.bind(this)} size={this.state.contents_id}></AddMain>
    }
    return components;
  }

  render(){
    console.log("Main render()");
    return(
      <div>
        {this.getContent()}
      </div>
    );
  }
}

export default Main;