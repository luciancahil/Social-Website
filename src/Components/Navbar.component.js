import React from 'react';


class NavBar extends React.Component {
  render() {
    return (
        <nav>
            <div id = "SearchBar">   

                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>

            <div id = "navlinks">
                <a>Sign in</a>
                <a>Sign up</a>
            </div>
        </nav>
    );
  }
}


export default NavBar;