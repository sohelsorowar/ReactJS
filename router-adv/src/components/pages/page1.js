import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class page1 extends Component {
    render() {

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{

            return (
                <div>
                    <h1>This is page1</h1>
                </div>
            );

        }
       
    }
}

export default page1;