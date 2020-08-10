import React from 'react'

function Hello(props){

    function doThis(a){
     alert(a);
     }

    return(
        
        <div>
            
            <button onClick={doThis.bind(this,"Hello i am from parameter")}>Click Me</button>
            <h1>Name: {props.name} and age : { props.age}</h1>
            
        </div> 
        
    )
}
export default Hello