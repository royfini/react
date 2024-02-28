import React, { Component } from 'react';
import Person from './Person';
import { v4 as uuidv4 } from 'uuid';

class Persons extends Component {
    state = {
        data :[
            {id:1,name:'roy',age:19,hobby:'billiards'},
            {id:2,name:'nabil',age:50,hobby:'basket'},
            {id:3,name:'ali',age:35,hobby:'reading'},
            {id:4,name:'ahmad',age:24,hobby:'football'}
        ],
        PersonName:''
    }

    handleName(value){
        this.setState({PersonName : value });
    }

    AddPerson(){
        let  newId = uuidv4();
         let newPerson = {id:newId,name:this.state.PersonName,age: 12,hobby:'swim'};
         let newArray = [...this.state.data,newPerson];
         this.setState({data : newArray});
         this.setState({PersonName:''});
    }

    removePerson(id_to_remove){
let array = this.state.data.filter(x=>x.id !== id_to_remove);
this.setState({data:array});
    }

    render() {
        return (
            <div>
                <input onChange={(e)=>{this.handleName(e.target.value)}}></input>
                <button onClick={()=>{this.AddPerson()}}>Add Person</button>
                {this.state.data.map((p)=>(<Person name={p.name} age={p.age}  MyId={p.id} hobby={p.hobby} key={p.id} removehandler={(id)=>{this.removePerson(id)}}/>))}
            </div>
        );
    }
}

export default Persons;