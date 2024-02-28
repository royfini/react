import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
    data =[{name:"roy",id:12},{name:"farid",id:33},{name:"ali",id:90}];

    // sketchData(){
    //     return this.data.map((e)=><Student name={e.name} myFunc={()=>{this.f1(e.id)}}></Student>)
    // }

    f1(s){
        alert(s);
    }

    render() {
        return (
            <div>
                <ul>
                   {
                    this.data.map((e)=><Student name={e.name} />)
                   }
                </ul>
            </div>
        );
    }
}

export default Students;