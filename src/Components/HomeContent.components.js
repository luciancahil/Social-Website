import React from 'react';


class HomeContent extends React.Component {
  render() {
    if(this.props.login_status){
      return null;
    }

    return <h2>Home Content</h2>;
  }
}


export default HomeContent;