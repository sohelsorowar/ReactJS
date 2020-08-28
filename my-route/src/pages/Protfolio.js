import React, { Component } from 'react';

import styles from '../Mycss.module.css';
import axios from 'axios';

class Protfolio extends Component {


    constructor(){
        super();
        this.state={
            postData:" ",
            postResult:" "
        }
    }

    onChangeHandler=(event)=>{
        var myData=event.target.value;
        this.setState({postData:myData});

    }

    onClickHandler=()=>{

        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
        .then(response=>{
            this.setState({postResult:response.data})
            alert(this.state.postResult)
        })
        .catch(error=>{
            alert("somethin wronf");
        })

    }


    render() {
        return (
            <div>
                <h1 className={styles.TextStyle}>This is my Protfolio with CSS Module</h1>
                <h2>post data</h2>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>Send</button>

            </div>
        );
    }
}

export default Protfolio;