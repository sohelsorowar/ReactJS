import React, { Component } from 'react';

class Forms extends Component {

    constructor(){

        super()
        this.state={
            username: "  ",
            userInput:" ",
            city1:"Dhaka",
            city2:"Bogura",
            city3:"Rajshahi",
            city4:"Chitagong",
            show:" ",
            auto:"Bogura"

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

    onChangeHandler3=(event)=>{
       var SelectedValue= event.target.value;
        this.setState({show:SelectedValue, auto:SelectedValue});
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
                <br></br><br></br>

                <h1>Select Drop Down</h1>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler3} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select><br></br><br></br>
            </div>
        );
    }
}

export default Forms;