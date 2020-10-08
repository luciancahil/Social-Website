import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Userpage from './Components/Userpage.component';
import NavBar from './Components/Navbar.component';
import Login from './Components/Login.component';
import Signup from './Components/SignUp.component';
import Searching from './Components/Searching.components';



class MainPage extends React.Component { 
  constructor(props){
    super(props);

    this.state = {
      loggedIn: "You are not logged in"
    };

    this.quickLogin = this.quickLogin.bind(this);
    this.fetchLogin = this.quickLogin.bind(this);
    console.log("hi");
    

    

    this.changeUser = this.changeUser.bind(this);
  }

  //logs in immediately if local storage contains a username and password
  quickLogin(){
    let uName = localStorage.getItem("username");
    let pWord = localStorage.getItem("password");

    if(uName == null){
      return;
    }
    
    let fetchURL = "https://social.twgxe.net/login?username=" + uName + "&password=" + pWord;
    fetch(fetchURL)
      .then((response) => response.text())
      .then((text) => {
          console.log(text);

          this.setState({
              login_status: text
          })
          if(this.state.login_status === "granted"){
            this.setState({
              loggedIn: "You are logged in"
            })
              
          }
      })
  }

  componentDidMount(){
    this.quickLogin();
  }

  fetchLogin(fetchURL){
    
    fetch(fetchURL)
            .then((response) => response.text())
            .then((text) => {
                console.log(text);

                this.setState({
                    login_status: text
                })
                if(this.state.login_status === "granted"){
                  this.setState({
                    loggedIn: "You are logged in"
                  })
                    
                }
            })
  }

  changeUser(uName, pWord){
    window.localStorage.setItem("username", uName);
    window.localStorage.setItem("password", pWord);

    this.setState({
      loggedIn: "You are logged in"
    })
  }

  render(){
    return (
      <Router>
          <NavBar login_status = {this.state.loggedIn}/>
          
          

          <div id = "content">
            <p>{this.state.loggedIn}</p>
            <Route path="/user" component={Userpage} />
            <Route path="/signup" compontent={Signup}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" render={(props) => <Login {...props} changeUser = {this.changeUser}/>} />
            <Route path="/search" component={Searching} />
          </div>
          
      </Router>
    );
  }
}

// <Route path="/login" render={(props) => <Login {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />
// <Route path="/login" render={(props) => <Login {...props} chageUser = {this.changeUser}/>


export default MainPage;
