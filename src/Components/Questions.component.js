import React from 'react';
import data from './Questions.json';
import Question from './Question.component';

class Questions extends React.Component {
    constructor(props){
        super(props);

        this.getIndexArray = this.getIndexArray.bind(this);
        
        this.state = {
            questionArray : data.Qs,
            indexArray : this.getIndexArray(data.Qs),
            answerArray: [],
            info: ""
        }

        this.renderQuestion = this.renderQuestion.bind(this);
        this.updateServer = this.updateServer.bind(this);
        this.updateAnswers = this.updateAnswers.bind(this);
        this.sendCommand = this.sendCommand.bind(this);
    }

    getIndexArray(array){
        var ints = [];

        for(let i = 0; i < array.length; i++){
            ints[i] = i;
        }

        return ints;
    }

    renderQuestion = (index) => <Question key = {index} index = {index} q = {this.state.questionArray[index]} updateAnswers ={this.updateAnswers}/>


    updateAnswers(index, text){
        this.state.answerArray[index] = text;
    }


    updateServer(){
        let pass = localStorage.getItem("password");
        let user = localStorage.getItem("username");
        
        let fetchURL;
        //https://social.twgxe.net/addQnA?username=dummy&password=dummy1&question=what+is+your+name?&answer=dummy


        for(let i = 0; i < this.state.answerArray.length; i++){
            let question = this.state.questionArray[i];
            let answer = this.state.answerArray[i];
            console.log(question);

            if(answer === undefined){
                continue;
            }

            fetchURL = "https://social.twgxe.net/addQnA?username=" + user + "&password=" + pass +  "&question=" + question + "&answer=" + answer;
            this.sendCommand(fetchURL);
        }
    }

    async sendCommand(fetchURL){
        await fetch(fetchURL)
        .then((response) => response.text())
        .then((text) => {
            if(text !== "inserted"){
                console.log("error with " + fetchURL);
            }
        })
    }

    render() {
        return (
            <div id = "Question Section">
                <h2>Questions:</h2>
                <div id = "Questions">
                    {this.state.indexArray.map(this.renderQuestion)}
                </div>
                <br/>
                <button onClick = {this.updateServer}>Download Information</button>
                <br></br>
            </div>
        );
    }
}


export default Questions;