import React, { Component } from 'react';



class Hello1 extends Component {
    constructor(){
        super()

        this.state={
            name:"Sohel"
        }
    }

    changeName(a){

        this.setState({name:a})

    }

    state = {  }
    render() { 
        return <div>
        <h1>Name from Hello1={this.state.name}</h1>
        <button onClick={this.changeName.bind(this,"Sorowar")}>Change Name</button>
    
    </div>
    }
}
 
export default Hello1;