import React, { Component } from 'react';

class Forms extends Component {

    constructor(){

        super()
        this.state={
            name: " "
        }

    }

    onChangeHandler=(event)=>{

        var newname = event.target.value;
        this.setState({name:newname})

    }

    render() {
        return (
            <div>

                <form>
                    <p>Fill The Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="User Name"></input>
                    <input type="submit" value="Submit now"></input>
                </form>
                
            </div>
        );
    }
}

export default Forms;