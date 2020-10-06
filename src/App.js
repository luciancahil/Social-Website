import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Userpage from './Components/Userpage.component';
import NavBar from './Components/Navbar.component';
import Login from './Components/Login.component';
import Signup from './Components/SignUp.component';
import Searching from './Components/Searching.components';



function App() {
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

export default App;
