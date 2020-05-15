import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)

      this.state ={
        count: 0
      }
    }

    increment(){
    //  this.state.count = this.state.count +1  //tere is a problem showing increment.thats why setState

      this.setState({
        count: this.state.count +1
      },
      ()=>{
        console.log('callback Value',this.state.count);
      }
    )

    this.setState(prevState => ({
      count: prevState.count +1
    }))
      console.log(this.state.count);
    }

    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }

  render() {
    return(
      <div>
       <div>Count- {this.state.count}</div>
       <button onClick={()=> this.increment()}>Increment</button>
       <button onClick={()=> this.incrementFive()}>IncrementFive</button>
      </div>
    )
  }
}

export default Counter
