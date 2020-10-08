import React from 'react';


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "You are not logged in"
        }
    }

    componentDidMount(){
        console.log(this.props.login_status);

        if(this.props.login_status === "You are logged in"){
            let newText = "Hello " + localStorage.getItem("username");

            this.setState({
                text: newText
            })
        }
    }

    render() {
        return <h2>{this.state.text}</h2>;
    }
}


export default Home;