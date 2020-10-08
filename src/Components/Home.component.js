import React from 'react';
import Questions from './Questions.component'
import Content from './HomeContent.components'


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "You are not logged in"
        }
    }

    componentDidMount(){

        if(this.props.login_status === "You are logged in"){
            let newText = "Hello " + localStorage.getItem("username");

            this.setState({
                text: newText
            })
        }
    }

    render() {
        return (
            <div id = "home">
                <h2>{this.state.text}</h2>
                <Content key = {this.props.login_status} login_status = {this.props.login_status}/>
            </div>
        );

        
    }
}


export default Home;