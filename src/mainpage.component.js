import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Userpage from './Components/Userpage.component';
import NavBar from './Components/Navbar.component';
import Login from './Components/Login.component';
import Signup from './Components/SignUp.component';
import Searching from './Components/Searching.components';
import Signout from './Components/Signout.component';
import Home from './Components/Home.component'
import Edit from './Components/Edit.component'
import Landing from './Components/Landing.component';


class MainPage extends React.Component { 
  constructor(props){
    super(props);

    this.state = {
      loggedIn: "You are not logged in"
    };

    this.quickLogin = this.quickLogin.bind(this);
    this.fetchLogin = this.quickLogin.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.clearUser = this.clearUser.bind(this);
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

  clearUser(){
    window.localStorage.clear();

    this.setState({
      loggedIn: "You are not logged in"
    })
  }

  render(){

    return (
      <Router>
          <NavBar login_status = {this.state.loggedIn} key = {this.state.loggedIn}/>
          
          

          <div id = "content">
          <Route path="/" exact render={(props) => <Landing/>} />
            <Route path="/user" component={Userpage} />
            <Route path="/signup" compontent={Signup}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" render={(props) => <Login {...props} changeUser = {this.changeUser}/>} />
            <Route path="/signout" render={(props) => <Signout {...props} clearUser = {this.clearUser}/>} />
            <Route path="/home" render={(props) => <Home {...props} login_status = {this.state.loggedIn} key = {this.state.loggedIn} />} />
            <Route path="/search" component={Searching} />
            <Route path="/edit" component={Edit} />
          </div>
          
      </Router>
    );
  }
}

// <Route path="/login" render={(props) => <Login {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />
// <Route path="/login" render={(props) => <Login {...props} chageUser = {this.changeUser}/>


export default MainPage;
