import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.getClean = this.getClean.bind(this);

        this.state = {
            search : ""
        }

        
    }

    componentDidMount(){
        this.getClean(this.props.location.search.substring(8))
    }

    getClean(str){
        let purged = str.replace("+", " ");
        purged = purged.replace("%20", " ");
        purged = purged.replace("%26", "&");

        this.setState({
            search: purged
        })

    }

    render() {
        return <h2>Searching for {this.state.search}</h2>;
    }
}


export default Signup;