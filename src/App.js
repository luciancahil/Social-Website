import React from 'react';
import './App.css';
import Userpage from './Components/Userpage.component';
import NavBar from './Components/Navbar.component';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Userpage/>
    </div>
  );
}

export default App;
