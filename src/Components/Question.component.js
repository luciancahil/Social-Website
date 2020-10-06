import React from 'react';
//To edit the list of quesions, edit the file "Questions.json"

class Question extends React.Component {
    constructor(props){
        super(props);

        this.updateText = this.updateText.bind(this);
    }

    updateText(e){
        e.preventDefault();

        //console.log(e.target.value);
        this.props.updateAnswers(this.props.index, e.target.value);
    }

    render() {
        return (
            <div className = "Question">
                <p>{this.props.q}</p>
                <div className = "Input">
                    <input type = "text" onChange = {this.updateText}></input>
                </div>
            </div>
            
        );
    }
}


export default Question;