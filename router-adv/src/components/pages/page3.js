import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class page3 extends Component {

  
    render() {

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
         }
        else{

            return (
                <div>
                    <h1>page 3</h1>
                </div>
            );
        }
       
    }
}

export default page3;