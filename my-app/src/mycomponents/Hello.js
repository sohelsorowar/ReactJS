import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Hello(props){

    function doThis(a){
     alert(a);
     }

    return(
        
        <div>
            
            <button className="btn btn-primary btn-sm m-2" onClick={doThis.bind(this,"Hello i am from parameter")}>Click Me</button>
            <h1>Name: {props.name} and age : { props.age}</h1>
            
        </div> 
        
    )
}
export default Hello