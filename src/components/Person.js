import React, { Component } from 'react';

class Person extends Component {
    myStyle = { color: 'black', background: 'green', fontSize: 24 }
    render() {
        return (
            <div>
                <div style={this.myStyle}>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>
                    <p>{this.props.hobby}</p>
                    <button onClick={()=>{this.props.removehandler(this.props)}}>X</button>
                </div>
            </div>
        );
    }
}

export default Person;