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
    return (
      <div id = "homeContent">
        <div id = "QnA">
          {this.state.indexArray.map(this.renderQuestion)}
        </div>
        <br/>
      </div>
    );
  }
}


export default HomeContent;