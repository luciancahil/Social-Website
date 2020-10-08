import React from 'react';
import LoginError from './loginerror.component'


class SignUpBox extends React.Component {
  constructor(props){
    super(props);
    //window.location.href = "/login";

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePasswordOne = this.onChangePasswordOne.bind(this);
    this.onChangePasswordTwo = this.onChangePasswordTwo.bind(this);
    this.enter = this.enter.bind(this);
    this.state = {
        signup_username: "" ,
        signup_password_one: "",
        signup_password_two: "",
        signup_status: ""
    };
  }
  
  onChangeUsername(e){
      this.setState({
        signup_username : e.target.value
      })
  }

  onChangePasswordOne(e){
    this.setState({
        signup_password_one : e.target.value
    })
  }

  onChangePasswordTwo(e){
    this.setState({
        signup_password_two : e.target.value
    })
  }

  onSubmit(e){
      //checks to see if the username password combo is potentially valid
    let pOne = this.state.signup_password_one;
    let pTwo = this.state.signup_password_two;
    let user = this.state.signup_username;

    if(user.length < 5){
        this.setState({
            signup_status : "shortUser"
        })
        return;
    }
    
    if(pOne !== pTwo){
       this.setState({
            signup_status : "unmatched"
        })
        return;
    }

    if(pOne.length < 8){
        console.log("shortPass");
        this.setState({
            signup_status : "shortPass"
        })
        return;
    }

    this.setState({
        signup_status : "hi"
    })
    
    this.enter(user, pOne);
  }

  //submit the password into the backend
  enter(userN, passW){
      let fetchURL = "https://social.twgxe.net/signup?username=" + userN + "&password=" + passW;

      fetch(fetchURL)
            .then((response) => response.text())
            .then((text) => {
                this.setState({
                    signup_status : text
                })

                console.log(text);
                if(this.state.signup_status === "inserted"){
                    window.location.href = "/signedup";
                }
            })
  }

  render() {
    return(
        <div className = "BoxBoxOuter">
            <div className = "Box">
                <div className = "BoxTop"><h2>Signup</h2></div>

                <div className = "BoxBottom">
                    <div className = "BoxForms">
                        <plaintext>Username:</plaintext><input type = "text" value = {this.state.signup_username} onChange = {this.onChangeUsername}></input><br></br>
                        <plaintext>Password:</plaintext><input type = "password" value = {this.state.signup_password_one} onChange = {this.onChangePasswordOne}></input><br></br>
                        <plaintext>Retype Password:</plaintext><input type = "password" value = {this.state.signup_password_two} onChange = {this.onChangePasswordTwo}></input><br></br>
                        <LoginError type = {this.state.signup_status}/>
                    </div>

                    
                    <div className = "SignupButtonOuter">
                        <div className = "SignupButtonInner">
                            <button onClick = {this.onSubmit}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default SignUpBox;