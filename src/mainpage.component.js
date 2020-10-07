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
      username: "",
      password: ""
    };
  }

  changeUser(uName, pWord){
    this.setState({
      username: uName,
      password: pWord
    })
  }

  render(){
    return (
      <Router>
          <NavBar/>
          
          <div id = "content">
            <Route path="/user" component={Userpage} />
            <Route path="/signup" compontent={Signup}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Searching} />
          </div>
          
      </Router>
    );
  }
}

export default MainPage;
