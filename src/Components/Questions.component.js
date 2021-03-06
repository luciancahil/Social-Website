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

    renderQuestion = (index) => <Question key = {index + " " + this.state.answerArray[index]} index = {index} q = {this.state.questionArray[index]} a = {this.state.answerArray[index]} updateAnswers ={this.updateAnswers}/>


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

            if(answer === undefined){
                continue;
            }

            fetchURL = "https://social.twgxe.net/addQnA?username=" + user + "&password=" + pass +  "&question=" + question + "&answer=" + answer;
            this.sendCommand(fetchURL);
        }

        window.location.href = "/home";
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
    }

    render() {
        return (
            <div id = "Question Section">
                <h2>Questions:</h2>
                <p>Hello there! Welcome to the editing page!</p>
                <p>Here, you can fill out whatever questions you're tired of being asked over and over. Don't feel the need to fill it out all at once though; the website saves your info, so you can come back another time and finish it later, or just leave some questions unfinshed.</p>
                <p>Your information will be encrypted using state of the art encryption with a secret key, so only people who know your password can see your answers. Even the dude who made this website can't see them.</p>
                <p>(Don't forget to hit the "save" button!)</p>
                <div id = "Questions">
                    {this.state.indexArray.map(this.renderQuestion)}
                </div>
                <br/>
                <div id = "EditButtons">
                    <button onClick = {this.updateServer}>Save</button>

                    <a href = "/home"><button>Cancel</button></a>
                </div>
                <br></br>
            </div>
        );
    }
}


export default Questions;