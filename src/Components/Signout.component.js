import React from 'react';


class Signout extends React.Component {
    componentDidMount(){
        this.props.clearUser();
    }

    render() {

        return <h2>Successfully Signed OUt</h2>;
    }
}


export default Signout;