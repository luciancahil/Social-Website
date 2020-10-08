import React from 'react';
import Questions from './Questions.component'

//addQnA?username=dummy&password=dummy1&question=what+is+your+name?&answer=dummy

class Edit extends React.Component {
    constructor(props){
        super(props);
        

        this.state = {
            info: "Hi There! \nI like you!"
        }
    }
  
    render() {
    
        return (
            <div id = "UserPageOuter">
                <div className = "UserPage">
                    <div className = "header">    
                        <h1>Editing Page</h1>
                    </div>  

                    <Questions/>

                    
                </div> 
            </div>
        );
  }
}


export default Edit;