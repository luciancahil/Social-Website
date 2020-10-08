import React from 'react';


class QnA extends React.Component {
  render() {
    return (
        <div className = "QnA">
            <h3>{this.props.q}</h3>
            <p>{this.props.a}</p>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
  }
}


export default QnA;