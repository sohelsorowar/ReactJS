import React,{Component} from 'react'

class Welcome1 extends Component {

    constructor(){
        super()
        var obj={
            name: "Sohel Sorowar",
            Age: ["21","25","30"], //we can take array too
            height:"5 feet 7 inch",
            weight:{   //we ca take child property or child object
                class7:"40",
                class8:"50",
                class9:["40","41","42"]
            }
        }

        this.state=obj
    }
 
    render() { 
    return <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.Age}</h1>
        <h1>{this.state.height}</h1>
        <h1>{this.state.weight.class9[2]}</h1>
    </div>
       

    }
}
 
export default Welcome1;