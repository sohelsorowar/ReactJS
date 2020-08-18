import React, { Component } from 'react';

class Condition1 extends Component {

constructor(){
    super()
    this.state={
        login:false
    }
}

    state = {  }
    render() { 

        if(this.state.login==true){
        return ( <button>Log Out</button> );
        }
        else{
            return(<button>Login Now</button>)
        }
    }
}
 
export default Condition1;