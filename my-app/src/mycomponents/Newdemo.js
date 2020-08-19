import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Newdemo extends Component {



    myFun(){

        var container = document.getElementById("myID");
        var element = <h1> My another name is Sorowar </h1>
        var callback = function(){
            alert("hi im from callBack");
        }
        ReactDom.hydrate(element,container,callback);

    }



    render() {
        return (
            <div>
                <button onClick={this.myFun}>NewDemo Change</button>
                <h1 id="myID">my name is Sohel</h1>
            </div>
        );
    }
}

export default Newdemo;