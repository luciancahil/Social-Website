import React from 'react';
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

        if(this.state.text === "You are not logged in"){
            return <h2>You are not logged in</h2>
        }

        return (
            <div id = "home">
                <div id = "homeHeader">
                    <h2>{this.state.text}</h2>
                </div>
                <div id = "homeEditButton">
                    <a href ="/edit" ><button>Edit</button></a>
                </div>
                <br/>
                <Content/>
            </div>
        );

        
    }
}


export default Home;