import React, { Component } from 'react';
import Country from './Country';

class countries extends Component {
    countries = [{name:'Lebanon',capital:'Beirut'},{name:'Italy',capital:'Roma'},{name:'Australia',capital:'Sydney'}]
    render() {
        return (
            <div>
                {
                    this.countries.map((e)=><Country name={e.name} capital={e.capital}/>)
                }
            </div>
        );
    }
}

export default countries;