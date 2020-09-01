import React, { Component } from 'react';

class page3 extends Component {

    constructor({match}){
        super();
        this.state={
            myname:match.params.username
        }
    }
    render() {
        return (
            <div>
                <h1>Page3</h1>
                <h1>Data from page2 by urls: {this.state.myname}</h1>
                
            </div>
        );
    }
}

export default page3;