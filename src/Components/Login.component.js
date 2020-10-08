import React from 'react';
import LoginBox from './LoginBox.component';

class Login extends React.Component {
  render() {

    return <LoginBox changeUser = {this.props.changeUser}/>;
  }
}


export default Login;