import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            
                <li>{this.props.name}</li>
            
        );
    }
}

export default Student;