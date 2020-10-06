import React from 'react';


class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search : ""
    };

    this.goSearch = this.goSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    e.preventDefault();

    this.setState({
      search: e.target.value
    })
  }

  goSearch(e){
    if(e.keyCode===13){
      alert('you entered ' + this.state.search)
    }
  }


  render() {
    return (
        <nav>
            <div id = "SearchBar">   

                <input onKeyDown = {this.goSearch} onChange = {this.updateSearch} value = {this.state.search} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>

            <div id = "navlinks">
                <a href = "/login">Sign in</a>
                <a href = "/signup">Sign up</a>
            </div>
        </nav>
    );
  }
}


export default NavBar;