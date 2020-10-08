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

    this.setDownload = this.setDownload.bind(this);
    this.download = this.download.bind();
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
  }

  download(content, filename, contentType){
    if(!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], {'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
  }


  setDownload(){
    let bigInfo = "";    //stores the text that will get printed out
    let qArray = this.state.questionArray;
    let aArray = this.state.answerArray;

    for(let i = 0; i < qArray.length; i++){
      console.log(bigInfo);
      if(aArray[i] === undefined)
        continue;

      bigInfo += qArray[i] + "\n";
      bigInfo += aArray[i] + "\n\n"
    }

    this.setState({info: bigInfo}, () => {
      this.download(this.state.info, "information.txt");
    })

    //console.log(bigInfo);
    //console.log(this.state.info);

    //this.download(this.state.info, "information.txt");
  }

  render() {
    return (
      <div id = "homeContent">
        
        <div id = "QnA">
          {this.state.indexArray.map(this.renderQuestion)}
        </div>
        <br/>
        <button onClick = {this.setDownload}>Download</button>
      </div>

      
    );
  }
}


export default HomeContent;