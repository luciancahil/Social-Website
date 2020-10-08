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

  renderQuestion = (index) => <QnA key = {index + " " + this.state.answerArray[index]} index = {index} q = {this.state.questionArray[index]} a = {this.state.answerArray[index]}/>

  // sets default Values of editing page with previous values
  componentDidMount(){
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    let QnAObj;
    let question;
    let answer;
    let newAnswerArray = [];
    let fetchURL = "https://social.twgxe.net/getQnA?username=" + user + "&password=" + pass;

    fetch(fetchURL)
        .then((response) => response.text())
        .then((text) => {
            QnAObj = JSON.parse(text);
            
            console.log(QnAObj[this.state.questionArray[0]]);

            for(let i = 0; i < this.state.questionArray.length; i++){
                question = this.state.questionArray[i];
                answer = QnAObj[question];

                if(answer !== undefined){
                    newAnswerArray[i] = answer;
                }
            }

            this.setState({
                answerArray: newAnswerArray
            })
        })
        .then(console.log(this.state.answerArray));
    }
  
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