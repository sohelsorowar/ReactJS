import React, { Component } from 'react';

class Forms extends Component {

    constructor(){

        super()
        this.state={
            username: "  ",
            userInput:" "
        }

    }

    onChangeHandler=(event)=>{
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue})
    }
    
    onChangeHandler2=(event)=>{
        var mytext = event.target.value;       
        this.setState({userInput:mytext})
    }

    onSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmitHandler}>
                    <p>Fill The Form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="User Name"></input>
                    <input type="submit" value="Submit now"></input>
                </form>
                <h1>Text Area</h1>
                <textarea onChange={this.onChangeHandler2} placeholder="Please insert some text" ></textarea>
                <p>{this.state.userInput}</p>
                
            </div>
        );
    }
}

export default Forms;