import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super();
        this.state={
            fname: " ",
            lname:" ",
            email : " ",
            mobile : " "
        }
    }

    onChangeHandler=(event)=>{

        var inputname = event.target.name;
        var inputvalue = event.target.value;
        this.setState({[inputname]:inputvalue});


        if(inputname==="fname"){
            var namePattern= /^([A-Z a-z]){2,30}$/ ;
            if(!namePattern.test(inputvalue)){
                this.setState({fname:"First Name is Not valid"});
            }
        }

        if(inputname==="lname"){
            var namePattern= /^([A-Z a-z]){2,30}$/ ;
            if(!namePattern.test(inputvalue)){
                this.setState({lname:"First Name is Not valid"});
            }
        }

        if(inputname==="email"){
            var namePattern= /\S+@\S+\.\S+/ ;
            if(!namePattern.test(inputvalue)){
                this.setState({email:"First Name is Not valid"});
            }
        }

        if(inputname==="mobile"){
            
            if(!Number(inputvalue)){
                this.setState({mobile:"First Name is Not valid"});
            }
        }

    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <from>
              
                <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                <input onChange={this.onChangeHandler} name="email" type="email" placeholder="Email"></input><br></br>
                <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br></br>
                <input name="submit" type="submit" value="Save Now"></input>
                
                </from>
                <h1>Sign Up Data</h1>
                <p>First name: {this.state.fname}</p>
                <p>Last name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>
               
            </div>
        );
    }
}

export default Signup;