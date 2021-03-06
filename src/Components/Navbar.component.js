import React from 'react';


class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search : "",
      leftText: "Sign in",
      leftLink: "/login"
    };


    this.goSearch = this.goSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.purge = this.purge.bind(this);
  }

  updateSearch(e){
    e.preventDefault();

    this.setState({
      search: e.target.value
    })
  }

  //runs when the enter key is hit in the search bar
  goSearch(e){
    if(e.keyCode===13){
      window.location.href = 'search?search=' + this.purge(this.state.search);
    }
  }

  // remove undesireable characters
  purge(str){
    let purged = str.replaceAll(" ", "+");
    purged = purged.replaceAll("&", "%26");

    return purged;
  }

  componentDidMount(){
    if(this.props.login_status === "You are logged in"){
      this.setState({
        leftText: "Sign out",
      leftLink: "/signout"
      })
    }
  }

  render() {
    return (
        <nav>
            <div id = "SearchBar">   

                <input onKeyDown = {this.goSearch} onChange = {this.updateSearch} value = {this.state.search} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>

            <div id = "navlinks">
                <a href = "/home">Home</a>
                <a href = {this.state.leftLink}>{this.state.leftText}</a>
                <a href = "/signup">Sign up</a>
            </div>
        </nav>
    );
  }
}


export default NavBar;