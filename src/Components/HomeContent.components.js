import React from 'react';
import data from './Questions.json';
import QnA from './QnA.component'


class HomeContent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      questionArray : data.Qs,
      indexArray : this.getIndexArray(data.Qs),
      answerArray: [],
      info: ""
    }

    console.log(this.state.indexArray);
  }

  getIndexArray(array){
        var ints = [];

        for(let i = 0; i < array.length; i++){
            ints[i] = i;
        }

        return ints;
  }

  renderQuestion = (index) => <QnA key = {index} index = {index} q = {this.state.questionArray[index]} a = {this.state.answerArray}/>

  
  render() {
    if(this.props.login_status === "You are not logged in"){
      return null;
    }

    return (
      <div id = "home content">
        <h2>Home Content</h2>
        <div id = "QnA">
          {this.state.indexArray.map(this.renderQuestion)}
        </div>
      </div>
    );
  }
}


export default HomeContent;