import React from 'react';
import {useState} from 'react';

const Hook=()=> {



    const [name,setName]=useState({

        country:"Bangladesh"

    })
    const change=()=>{
        setName({country: "Nepal"})
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default Hook;