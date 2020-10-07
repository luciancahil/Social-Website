import React from 'react';

class LoginError extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error_message : "none"
        }
    }

    //Changes after a login attempt
    componentDidUpdate(){
        const wrongPass = "Error! Your Password is Incorrect";
        const notRegistered = "Error! Your Username is not registered.";
        const shortUser = "Error! Your username must be 5 characters long.";    //username too short    
        const unmatchedPasswords = "Error! Your passwords do not match.";
        const shortPassword = "Error! Your password must be 8 characters long";
        const duplicateUser = "Error! That username is already in use";
        const noError = "none";
        
        if(this.props.type == "Denied"){
            if(this.state.error_message != wrongPass){
                this.setState({error_message: wrongPass});
            }
        } else if(this.props.type == "Unfound"){
            if(this.state.error_message != notRegistered){
                this.setState({error_message: notRegistered});
            }
        }else if(this.props.type == "shortUser"){
            if(this.state.error_message != shortUser){
                this.setState({error_message: shortUser});
            }
        }else if(this.props.type == "unmatched"){
            if(this.state.error_message != unmatchedPasswords){
                this.setState({error_message: unmatchedPasswords});
            }
        }else if(this.props.type == "shortPass"){
            if(this.state.error_message != shortPassword){
                this.setState({error_message: shortPassword});
            }
        }else if(this.props.type == "duplicate"){
            if(this.state.error_message != duplicateUser){
                this.setState({error_message: duplicateUser});
            }
        }else{
            if(this.state.error_message != noError){
                this.setState({error_message: noError});
            }
        }
    }

    render() {
        if(this.state.error_message == "none"){
            return null;
        }

        return (
            <plaintext id = "BoxError">{this.state.error_message}</plaintext>
        )
    }
}


export default LoginError;