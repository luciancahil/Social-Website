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
        this.download = this.download.bind(this);
        this.setDownload = this.setDownload.bind(this);
        this.updateAnswers = this.updateAnswers.bind(this);
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

    download(content, filename, contentType){
        if(!contentType) contentType = 'application/octet-stream';
            var a = document.createElement('a');
            var blob = new Blob([content], {'type':contentType});
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            a.click();
    }


    setDownload(){
        for(let i = 0; i < this.state.questionArray.length; i++){
            if(this.state.answerArray[i] != undefined){
                let part = this.state.questionArray[i] + "\n" + this.state.answerArray[i] + "\n\n";
                this.state.info += part;
            }
        }

        this.download(this.state.info, "information.txt");
    }

    render() {
        return (
            <div id = "Question Section">
                <h2>Questions:</h2>
                <div id = "Questions">
                    {this.state.indexArray.map(this.renderQuestion)}
                </div>
                <br/>
                <button onClick = {this.setDownload}>Download Information</button>
                <br></br>
            </div>
        );
    }
}


export default Questions;