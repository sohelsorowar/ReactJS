import React from 'react'

function Hello(props){

    function doThis(){
     alert("button clicked");
     }


    return(
        
        <div>
            
            <button onClick={doThis}>Click Me</button>
            <h1>Name: {props.name} and age : { props.age}</h1>
            
        </div> 
        
    )
}
export default Hello