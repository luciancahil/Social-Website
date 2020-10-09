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
        let purged = str.replaceAll("+", " ");
        purged = purged.replaceAll("%20", " ");
        purged = purged.replaceAll("%26", "&");
        purged = purged.replaceAll("%22", "\"");
        purged = purged.replaceAll("%3E", ">");
        purged = purged.replaceAll("%3C", "<")

        this.setState({
            search: purged
        })

    }

    render() {
        return <h2>Searching for {this.state.search} (This part of the site isn't done yet!)</h2>;
    }
}


export default Signup;