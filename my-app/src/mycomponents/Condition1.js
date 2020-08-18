import React, { Component } from 'react';

class Condition1 extends Component {

constructor(){
    super()
    this.state={
        login:true
    }
}

    state = {  }
    render() { 

        return(

            this.state.login? <h1>Element=IM 1ST</h1> : <h1>Element=IM 2nd</h1>
        )
    }
}
 
export default Condition1;