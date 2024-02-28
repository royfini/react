import React, { Component } from 'react';

class Country extends Component {
    render() {
        return (
            
                <li onClick={()=>{alert(this.props.capital)}}>{this.props.name}</li>
            
        );
    }
}

export default Country;