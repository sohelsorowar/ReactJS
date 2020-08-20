import React, { Component } from 'react';

class Forms extends Component {

    constructor(){

        super()
        this.state={
            username: "  "
        }

    }

    onChangeHandler=(event)=>{

        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue})

    }

    render() {
        return (
            <div>

                <form>
                    <p>Fill The Form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="User Name"></input>
                    <input type="submit" value="Submit now"></input>
                </form>
                
            </div>
        );
    }
}

export default Forms;