import React from 'react';
import './App.css';
import Userpage from './Components/Userpage.component';
import NavBar from './Components/Navbar.component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
        <Route path = "/" exact compontent = {<NavBar/>}/>
        <Route path = "/user" exact compontent = {<Userpage/>}/>

    </Router>
  );
}
// /            <Route path="/" exact render={(props) => <HomePage {...props} username = {this.state.username} chageUser = {this.changeUser} randomSession = {this.state.randomSession} quickStart = {this.quickStart}/>} />

export default App;
