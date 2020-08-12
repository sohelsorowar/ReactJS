import React,{Component} from 'react'

class Welcome1 extends Component {

    constructor(){
        super()
        this.state={
            name: "Sohel Sorowar",
            Age: "28",
            height:"5 feet 7 inch",
            weight:"75 kg"
        }
    }
 
    render() { 
    return <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.Age}</h1>
        <h1>{this.state.height}</h1>
        <h1>{this.state.weight}</h1>
    </div>
       

    }
}
 
export default Welcome1;