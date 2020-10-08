import React from 'react';
import Questions from './Questions.component'


class UserPage extends React.Component {
    constructor(props){
        super(props);
        
        this.download = this.download.bind(this);
        this.setDownload = this.setDownload.bind(this);

        this.state = {
            info: "Hi There! \nI like you!"
        }
    }
  
    download(content, filename, contentType){
        if(!contentType) contentType = 'application/octet-stream';
            var a = document.createElement('a');
            var blob = new Blob([content], {'type':contentType});
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            a.click();
    }


    setDownload(){
        this.download(this.state.info, "information.txt");
    }
  
    render() {
    
        return (
            <div id = "UserPageOuter">
                <div className = "UserPage">
                    <div className = "header">    
                        <h1>User Page</h1>
                    </div>  
                    <button></button>

                    <Questions/>

                    
                </div> 
            </div>
        );
  }
}


export default UserPage;