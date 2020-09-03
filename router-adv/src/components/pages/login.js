import React, { Component } from 'react';

class login extends Component {

login=()=>{
    sessionStorage.setItem("userName","a ")
}

logout=()=>{
    sessionStorage.clear()
}

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>LogOut</button>
            </div>
        );
    }
}

export default login;